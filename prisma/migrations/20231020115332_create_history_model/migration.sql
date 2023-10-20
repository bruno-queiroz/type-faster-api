-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "cpm" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "textId" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_textId_fkey" FOREIGN KEY ("textId") REFERENCES "Text"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
