# Migration `20200401162442-user`

This migration has been generated at 4/1/2020, 4:24:42 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."User" (
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "password" TEXT NOT NULL DEFAULT '' ,
    "username" TEXT NOT NULL DEFAULT '' 
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200401125217-users..20200401162442-user
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -23,9 +23,9 @@
   message   String
   createdAt DateTime @default(now())
 }
-model Users {
+model User {
   id  Int @id @default(autoincrement())
   username  String
   password  String
 }
```


