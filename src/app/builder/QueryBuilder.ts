import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }

    return this;
  }

  filter() {
    const queryObj = { ...this.query }; // copy

    // Filtering
    const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];

    excludeFields.forEach((el) => delete queryObj[el]);

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);

    return this;
  }

  // sort() {
  //   const sort =
  //     (this?.query?.sort as string)?.split(',')?.join(' ') || '-createdAt';
  //   this.modelQuery = this.modelQuery.sort(sort as string);

  //   return this;
  // }
  sort() {
    let sort = this?.query?.sort as string;

    if (sort) {
      // Check if 'name' is part of the sort string. If not, add it as a secondary sort.
      if (!sort.includes('name') && !sort.includes('-name')) { //check for both ascending and descending order of name
        if (sort.trim() !== "") { // Check if sort string is not empty or just whitespace
          sort += `, name`; // Add name as secondary sort (ascending)
        } else {
          sort = "name"; // If no sort is provided, sort by name.
        }

      }
      sort = sort.split(',').join(' '); //convert comma separated string to space separated

    } else {
      sort = 'name'; // Default sort by name (ascending)
    }

    this.modelQuery = this.modelQuery.sort(sort);

    return this;
  }

  paginate() {
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);

    return this;
  }

  fields() {
    const fields =
      (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v';

    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
  async countTotal() {
    const totalQueries = this.modelQuery.getFilter();
    const total = await this.modelQuery.model.countDocuments(totalQueries);
    const page = Number(this?.query?.page) || 1;
    const limit = Number(this?.query?.limit) || 10;
    const totalPage = Math.ceil(total / limit);

    return {
      page,
      limit,
      total,
      totalPage,
    };
  }
}

export default QueryBuilder;
