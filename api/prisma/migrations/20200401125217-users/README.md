# Migration `20200401125217-users`

This migration has been generated at 4/1/2020, 12:52:17 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Users" (
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "password" TEXT NOT NULL DEFAULT '' ,
    "username" TEXT NOT NULL DEFAULT '' 
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200330143056-contact..20200401125217-users
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
@@ -21,5 +21,11 @@
   name      String
   email     String
   message   String
   createdAt DateTime @default(now())
+}
+
+model Users {
+  id  Int @id @default(autoincrement())
+  username  String
+  password  String
 }
```


