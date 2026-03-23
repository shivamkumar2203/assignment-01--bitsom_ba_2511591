## ETL Decisions

### Decision 1 — Date Format Standardization

Problem: The raw dataset contained inconsistent date formats such as different representations of dates, which made it difficult to perform time-based analysis.

Resolution: All date values were converted into a standard ISO format (YYYY-MM-DD) before loading into the data warehouse. This ensures consistency and enables accurate aggregation by month and year.

---

### Decision 2 — Category Case Normalization

Problem: Product categories appeared in different formats such as "electronics", "Electronics", and "ELECTRONICS". This caused grouping issues during analysis.

Resolution: All category values were standardized into a consistent format (title case) before inserting into the dimension tables. This ensures correct grouping in analytical queries.

---

### Decision 3 — Handling Missing Values

Problem: Some records contained NULL or missing values, especially in product category or store information. This could lead to incomplete or incorrect analysis.

Resolution: Missing values were either replaced with a default value such as "Unknown" or removed if the record was not useful. This improves data quality and ensures reliable reporting.
