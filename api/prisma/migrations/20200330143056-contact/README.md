# Migration `20200330143056-contact`

This migration has been generated at 3/30/2020, 2:30:56 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Contact" (
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "email" TEXT NOT NULL DEFAULT '' ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL DEFAULT '' ,
    "name" TEXT NOT NULL DEFAULT '' 
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200330123109-create-posts..20200330143056-contact
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
@@ -13,5 +13,13 @@
   id        Int     @id @default(autoincrement())
   title     String
   body      String
   createdAt DateTime @default(now())
+}
+
+model Contact {
+  id        Int @id @default(autoincrement())
+  name      String
+  email     String
+  message   String
+  createdAt DateTime @default(now())
 }
```


