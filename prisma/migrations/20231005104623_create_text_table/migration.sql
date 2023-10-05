-- CreateTable
CREATE TABLE "Text" (
    "id" TEXT NOT NULL,
    "data" TEXT[],
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Text_pkey" PRIMARY KEY ("id")
);
