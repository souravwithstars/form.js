class Query {
  constructor(queries) {
    this.queries = queries;
    this.index = 0;
  }
  currentQuery() {
    console.log(this.queries[this.index]);
  }
  nextQueary() {
    this.index += 1;
    this.currentQuery();
  }
}

exports.Query = Query;
