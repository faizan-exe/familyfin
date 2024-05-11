import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('c5f4c6dc-cfb3-4e15-8681-b17b54196107', '1Dallas_Koepp@hotmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('be8ef7ab-41f3-496d-b80a-3a4166c361ef', '7Laurie19@yahoo.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=9', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('ab217e04-73dc-4867-bde7-94d05ba99d60', '13Fausto_Mueller19@gmail.com', 'David Brown', 'https://i.imgur.com/YfJQV5z.png?id=15', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('646f1f0a-aa18-4064-99d0-fd7a7aa3fdc9', '19Violette.Bosco@hotmail.com', 'Carol White', 'https://i.imgur.com/YfJQV5z.png?id=21', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('ebaed613-442d-4bc8-b4c2-a03c63e50c9a', '25Emelia.Bartoletti@yahoo.com', 'Carol White', 'https://i.imgur.com/YfJQV5z.png?id=27', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cec1cd02-8d22-49ca-85ed-5923ff0b45e4', '31Ashton_Fritsch@hotmail.com', 'Bob Smith', 'https://i.imgur.com/YfJQV5z.png?id=33', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('647741b8-8d41-4f99-b485-137bdb94d52a', '43Adalberto.Dietrich12@gmail.com', 'Carol White', 'https://i.imgur.com/YfJQV5z.png?id=45', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('1650616d-e180-471f-9a3a-d17f7e970b5b', '49Rylee.Walsh70@yahoo.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('b8b52fdf-1d6c-4b4e-8faa-0578870a78bf', '55Vesta_Volkman52@yahoo.com', 'Bob Smith', 'https://i.imgur.com/YfJQV5z.png?id=57', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2f44c8d5-128b-493c-84d0-fa5d277ea0da', 'Goal Reached', 'Your weekly allowance has been updated.', 'Jane Smith', '64Ike.Schamberger@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '1650616d-e180-471f-9a3a-d17f7e970b5b');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('121e1732-0817-4510-a08a-bf79fc1f74fc', 'Investment Alert', 'Learn about the importance of budgeting with our latest article.', 'EduFinance', '71Kathryn30@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('82970d4b-83d3-40c7-b37d-7c7e6b400ac5', 'Educational Tip', 'Your weekly allowance has been updated.', 'EduFinance', '78Antwan.Torp@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', 'be8ef7ab-41f3-496d-b80a-3a4166c361ef');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('21a54b27-1646-414c-a463-3a9b9c6a4234', 'Allowance Update', 'Congratulations Youve reached your savings goal', 'EduFinance', '85Shanelle_Jenkins33@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', 'be8ef7ab-41f3-496d-b80a-3a4166c361ef');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8bbe70ce-7729-4ba3-9e81-3a1fd8272801', 'Weekly Summary', 'Congratulations Youve reached your savings goal', 'Budget Bot', '92Ramon_Stokes@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', 'cec1cd02-8d22-49ca-85ed-5923ff0b45e4');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('546ae248-a4e1-4d6e-a0a8-d7775977ae05', 'Weekly Summary', 'Learn about the importance of budgeting with our latest article.', 'Jane Smith', '99Elyse_King6@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '646f1f0a-aa18-4064-99d0-fd7a7aa3fdc9');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d922cd99-679c-4c4f-a163-479fac443a5c', 'Investment Alert', 'Congratulations Youve reached your savings goal', 'Budget Bot', '106Etha91@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'ab217e04-73dc-4867-bde7-94d05ba99d60');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ff8e6306-3aac-4003-94fc-745b3ac963c4', 'Goal Reached', 'Heres your weekly financial summary.', 'FamilyFin Team', '113Mandy93@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', 'cec1cd02-8d22-49ca-85ed-5923ff0b45e4');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5487736e-185a-4a07-b77e-a710afc3b813', 'Investment Alert', 'Learn about the importance of budgeting with our latest article.', 'EduFinance', '120Chaya_Schumm@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', 'cec1cd02-8d22-49ca-85ed-5923ff0b45e4');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('cc654c3e-2ace-4130-9549-76c4fcd88502', 'Educational Tip', 'Heres your weekly financial summary.', 'EduFinance', '127Lonie_Howell9@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', 'ab217e04-73dc-4867-bde7-94d05ba99d60');

INSERT INTO "account" ("id", "accountType", "balance", "userId") VALUES ('6815aa5a-b3d9-4803-bda9-6286d7ea28a9', 'Education', 681, 'c5f4c6dc-cfb3-4e15-8681-b17b54196107');
INSERT INTO "account" ("id", "accountType", "balance", "userId") VALUES ('3977a1df-0dc8-4ec2-82ee-39336e99cf75', 'Savings', 545, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "account" ("id", "accountType", "balance", "userId") VALUES ('b3e8eee5-0dcf-470d-b75a-450473e11d47', 'Retirement', 77, 'c5f4c6dc-cfb3-4e15-8681-b17b54196107');
INSERT INTO "account" ("id", "accountType", "balance", "userId") VALUES ('7e00acab-bbe5-413f-95e4-c279f8544026', 'Education', 50, 'b8b52fdf-1d6c-4b4e-8faa-0578870a78bf');
INSERT INTO "account" ("id", "accountType", "balance", "userId") VALUES ('240ffe29-32cd-4379-b763-943912626ed0', 'Savings', 572, '646f1f0a-aa18-4064-99d0-fd7a7aa3fdc9');
INSERT INTO "account" ("id", "accountType", "balance", "userId") VALUES ('8531b034-406a-4df7-88ac-ceb9a0440483', 'Education', 658, 'be8ef7ab-41f3-496d-b80a-3a4166c361ef');
INSERT INTO "account" ("id", "accountType", "balance", "userId") VALUES ('dbf1791b-e581-43b4-8341-d0dd24f05ed2', 'Education', 371, '646f1f0a-aa18-4064-99d0-fd7a7aa3fdc9');
INSERT INTO "account" ("id", "accountType", "balance", "userId") VALUES ('50e88725-35ea-43e6-b736-ea0d8d47582b', 'Checking', 863, 'cec1cd02-8d22-49ca-85ed-5923ff0b45e4');
INSERT INTO "account" ("id", "accountType", "balance", "userId") VALUES ('dc4ae5f9-5c10-42aa-89b0-a01e97d0bfa1', 'Retirement', 403, 'ab217e04-73dc-4867-bde7-94d05ba99d60');
INSERT INTO "account" ("id", "accountType", "balance", "userId") VALUES ('36d1f5de-1e5e-4731-9744-ebdc45d107fe', 'Checking', 791, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "goal" ("id", "description", "targetAmount", "currentAmount", "dueDate", "userId") VALUES ('8f46dd11-c1dc-40ab-bdd4-00ffde4d32e8', 'Family vacation fund', 213, 256, '2024-08-22T14:09:08.047Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "goal" ("id", "description", "targetAmount", "currentAmount", "dueDate", "userId") VALUES ('eac0a12a-0fc2-4e10-95d5-c71351673e88', 'Family vacation fund', 326, 906, '2024-06-04T19:43:08.100Z', 'ebaed613-442d-4bc8-b4c2-a03c63e50c9a');
INSERT INTO "goal" ("id", "description", "targetAmount", "currentAmount", "dueDate", "userId") VALUES ('4694f554-cd28-4594-a07c-57e7fac4c057', 'Family vacation fund', 51, 824, '2023-12-21T10:05:10.382Z', 'c5f4c6dc-cfb3-4e15-8681-b17b54196107');
INSERT INTO "goal" ("id", "description", "targetAmount", "currentAmount", "dueDate", "userId") VALUES ('2d7674f7-1ad8-4792-86fc-0b1c09ae1fe0', 'New gaming console', 658, 182, '2024-09-12T13:31:04.388Z', '647741b8-8d41-4f99-b485-137bdb94d52a');
INSERT INTO "goal" ("id", "description", "targetAmount", "currentAmount", "dueDate", "userId") VALUES ('77e0d6ce-8dbb-42a9-9892-3c2822de5d11', 'New gaming console', 671, 563, '2024-12-27T17:49:24.777Z', '647741b8-8d41-4f99-b485-137bdb94d52a');
INSERT INTO "goal" ("id", "description", "targetAmount", "currentAmount", "dueDate", "userId") VALUES ('94e1bf76-393e-4f9d-b932-57c8e4d8dfdf', 'Emergency savings', 636, 432, '2024-03-13T18:53:46.221Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "goal" ("id", "description", "targetAmount", "currentAmount", "dueDate", "userId") VALUES ('1b02fb93-9ee8-408a-8ec4-fbabd6e0000f', 'New gaming console', 939, 735, '2025-05-02T14:51:39.092Z', '646f1f0a-aa18-4064-99d0-fd7a7aa3fdc9');
INSERT INTO "goal" ("id", "description", "targetAmount", "currentAmount", "dueDate", "userId") VALUES ('288519ff-c5f3-4ce0-a6ba-1b616fe7aabb', 'Family vacation fund', 479, 359, '2025-03-28T04:50:36.782Z', '647741b8-8d41-4f99-b485-137bdb94d52a');
INSERT INTO "goal" ("id", "description", "targetAmount", "currentAmount", "dueDate", "userId") VALUES ('7b8ac841-8eb4-4736-808b-c3fd9c2b7ab8', 'Emergency savings', 187, 236, '2024-04-17T04:16:59.874Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "goal" ("id", "description", "targetAmount", "currentAmount", "dueDate", "userId") VALUES ('db5ed451-827c-4567-bf2d-8d1465a05e0c', 'Emergency savings', 579, 812, '2024-11-20T11:56:16.819Z', '647741b8-8d41-4f99-b485-137bdb94d52a');

INSERT INTO "transaction" ("id", "amount", "transactionType", "timestamp", "accountId") VALUES ('afb097d1-c007-4830-8607-2c206c51f3bc', 407, 'investment', '2025-04-02T06:11:16.619Z', '8531b034-406a-4df7-88ac-ceb9a0440483');
INSERT INTO "transaction" ("id", "amount", "transactionType", "timestamp", "accountId") VALUES ('b83e4a4c-7c45-4dfc-8b28-d456f4fd3d6c', 984, 'transfer', '2025-04-01T01:49:55.080Z', '8531b034-406a-4df7-88ac-ceb9a0440483');
INSERT INTO "transaction" ("id", "amount", "transactionType", "timestamp", "accountId") VALUES ('b15b28a3-6d82-4198-9b9a-d70a434c4375', 31, 'deposit', '2025-04-20T13:39:35.318Z', '7e00acab-bbe5-413f-95e4-c279f8544026');
INSERT INTO "transaction" ("id", "amount", "transactionType", "timestamp", "accountId") VALUES ('2c44f447-3904-449e-89a3-c24199d5d89f', 460, 'transfer', '2025-03-29T11:32:01.969Z', '8531b034-406a-4df7-88ac-ceb9a0440483');
INSERT INTO "transaction" ("id", "amount", "transactionType", "timestamp", "accountId") VALUES ('633e62ef-fc35-4c20-81b0-534496e61100', 807, 'withdrawal', '2024-03-21T08:57:34.672Z', '7e00acab-bbe5-413f-95e4-c279f8544026');
INSERT INTO "transaction" ("id", "amount", "transactionType", "timestamp", "accountId") VALUES ('63a9d454-3136-4403-a596-66560312d154', 706, 'transfer', '2025-04-04T07:43:53.551Z', 'dbf1791b-e581-43b4-8341-d0dd24f05ed2');
INSERT INTO "transaction" ("id", "amount", "transactionType", "timestamp", "accountId") VALUES ('9195ad1e-5c46-4832-bfed-3a8724f6f4fe', 815, 'deposit', '2023-11-19T05:02:20.208Z', 'b3e8eee5-0dcf-470d-b75a-450473e11d47');
INSERT INTO "transaction" ("id", "amount", "transactionType", "timestamp", "accountId") VALUES ('be832c6a-473c-42e7-9339-a62f56cc1a66', 93, 'withdrawal', '2023-10-30T15:56:35.476Z', '50e88725-35ea-43e6-b736-ea0d8d47582b');
INSERT INTO "transaction" ("id", "amount", "transactionType", "timestamp", "accountId") VALUES ('aa14f010-26f8-4343-a0d3-206759837a08', 4, 'transfer', '2023-05-21T05:58:36.570Z', '3977a1df-0dc8-4ec2-82ee-39336e99cf75');
INSERT INTO "transaction" ("id", "amount", "transactionType", "timestamp", "accountId") VALUES ('9accb858-56bc-488d-a23b-d50c0acba564', 281, 'transfer', '2023-07-01T11:30:57.935Z', 'b3e8eee5-0dcf-470d-b75a-450473e11d47');

INSERT INTO "allowance" ("id", "amount", "frequency", "childId") VALUES ('b4408670-4e81-4902-bec3-a496097d2fa2', 605, 'quarterly', '647741b8-8d41-4f99-b485-137bdb94d52a');
INSERT INTO "allowance" ("id", "amount", "frequency", "childId") VALUES ('986eb8b8-732b-486f-9b47-d42a41fa0b15', 74, 'quarterly', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "allowance" ("id", "amount", "frequency", "childId") VALUES ('9fa9627f-b6df-4717-b022-c63d7e663059', 9, 'annually', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "allowance" ("id", "amount", "frequency", "childId") VALUES ('1699e5ac-2876-429e-b4ca-5dca1ba8e3c5', 733, 'weekly', '1650616d-e180-471f-9a3a-d17f7e970b5b');
INSERT INTO "allowance" ("id", "amount", "frequency", "childId") VALUES ('dbd8bf27-2b8f-4716-8ab0-f044854ad34f', 550, 'annually', 'be8ef7ab-41f3-496d-b80a-3a4166c361ef');
INSERT INTO "allowance" ("id", "amount", "frequency", "childId") VALUES ('faa35d79-268a-4fd1-b8a5-f6458f127d15', 830, 'annually', 'c5f4c6dc-cfb3-4e15-8681-b17b54196107');
INSERT INTO "allowance" ("id", "amount", "frequency", "childId") VALUES ('3e33f44a-5125-4f80-a907-e48efb1bd04e', 72, 'monthly', 'c5f4c6dc-cfb3-4e15-8681-b17b54196107');
INSERT INTO "allowance" ("id", "amount", "frequency", "childId") VALUES ('707f11dd-0bbb-43e9-9469-52f33d48cd86', 533, 'biweekly', 'ab217e04-73dc-4867-bde7-94d05ba99d60');
INSERT INTO "allowance" ("id", "amount", "frequency", "childId") VALUES ('6a573ed4-988a-4272-903d-c51de479e97e', 441, 'monthly', '647741b8-8d41-4f99-b485-137bdb94d52a');
INSERT INTO "allowance" ("id", "amount", "frequency", "childId") VALUES ('7d04b3d0-53c9-4ebd-9622-13fd34eceacd', 447, 'annually', '647741b8-8d41-4f99-b485-137bdb94d52a');

INSERT INTO "educationalcontent" ("id", "title", "description", "ageGroup") VALUES ('260ecbeb-29cd-411e-9bc2-0ac7d346be84', 'Investing for Beginners', 'Learn how to save money effectively with simple tips and tricks.', '912 years');
INSERT INTO "educationalcontent" ("id", "title", "description", "ageGroup") VALUES ('8f08de13-2f0b-43e3-b1cf-3ffcf1a966d1', 'Investing for Beginners', 'An introduction to the basics of investing and growing your money.', 'All ages');
INSERT INTO "educationalcontent" ("id", "title", "description", "ageGroup") VALUES ('36b0c4ea-6bcd-4566-85a5-77c8dc001b52', 'Investing for Beginners', 'A guide to creating and sticking to a personal budget.', '912 years');
INSERT INTO "educationalcontent" ("id", "title", "description", "ageGroup") VALUES ('8492f8b6-3c01-4f6d-b48a-f3960cd72fba', 'Earning and Spending', 'Insights into how earning money and spending wisely can balance.', 'All ages');
INSERT INTO "educationalcontent" ("id", "title", "description", "ageGroup") VALUES ('66c4521a-eaf3-485c-9828-387400c7701f', 'Saving Smartly', 'Learn how to save money effectively with simple tips and tricks.', '68 years');
INSERT INTO "educationalcontent" ("id", "title", "description", "ageGroup") VALUES ('4b25ae12-df37-476f-bf01-8205e5c6460e', 'Understanding Interest', 'An introduction to the basics of investing and growing your money.', 'All ages');
INSERT INTO "educationalcontent" ("id", "title", "description", "ageGroup") VALUES ('6c779941-9f98-4153-b6b3-292be4dbc13a', 'Earning and Spending', 'An introduction to the basics of investing and growing your money.', 'Teens');
INSERT INTO "educationalcontent" ("id", "title", "description", "ageGroup") VALUES ('5019e2fb-f973-4158-9af1-88f0e666a6a8', 'Investing for Beginners', 'Learn how to save money effectively with simple tips and tricks.', '1315 years');
INSERT INTO "educationalcontent" ("id", "title", "description", "ageGroup") VALUES ('3e412b1b-c600-4983-9711-a3649bc6ccb6', 'Budgeting Basics', 'Learn how to save money effectively with simple tips and tricks.', 'All ages');
INSERT INTO "educationalcontent" ("id", "title", "description", "ageGroup") VALUES ('5554cea1-8e64-497c-92b0-e979fad47f23', 'Budgeting Basics', 'An introduction to the basics of investing and growing your money.', 'Teens');

INSERT INTO "contentaccess" ("id", "accessDate", "contentId", "userId") VALUES ('2401fc0b-0c19-4de3-8ae2-a1f89667eded', '2024-04-10T05:06:00.483Z', '6c779941-9f98-4153-b6b3-292be4dbc13a', '1650616d-e180-471f-9a3a-d17f7e970b5b');
INSERT INTO "contentaccess" ("id", "accessDate", "contentId", "userId") VALUES ('d3d5392a-3fe7-4b15-b668-c254c63d6f79', '2025-03-02T11:23:42.990Z', '5554cea1-8e64-497c-92b0-e979fad47f23', 'b8b52fdf-1d6c-4b4e-8faa-0578870a78bf');
INSERT INTO "contentaccess" ("id", "accessDate", "contentId", "userId") VALUES ('c9986196-f876-4f8a-90b0-494e426d573d', '2025-03-09T06:45:38.066Z', '66c4521a-eaf3-485c-9828-387400c7701f', '1650616d-e180-471f-9a3a-d17f7e970b5b');
INSERT INTO "contentaccess" ("id", "accessDate", "contentId", "userId") VALUES ('0acbb105-dd60-41c3-8de8-5b6e91a482fb', '2024-02-19T23:12:03.167Z', '4b25ae12-df37-476f-bf01-8205e5c6460e', 'be8ef7ab-41f3-496d-b80a-3a4166c361ef');
INSERT INTO "contentaccess" ("id", "accessDate", "contentId", "userId") VALUES ('69d69bba-25ef-41f1-b79b-bacc3c107aeb', '2024-05-29T04:39:18.364Z', '8492f8b6-3c01-4f6d-b48a-f3960cd72fba', 'c5f4c6dc-cfb3-4e15-8681-b17b54196107');
INSERT INTO "contentaccess" ("id", "accessDate", "contentId", "userId") VALUES ('525b44d9-6ab7-4a69-bd07-393ea8c60058', '2025-03-06T07:42:35.810Z', '4b25ae12-df37-476f-bf01-8205e5c6460e', 'be8ef7ab-41f3-496d-b80a-3a4166c361ef');
INSERT INTO "contentaccess" ("id", "accessDate", "contentId", "userId") VALUES ('89fe6b36-b817-4a30-b847-1e979366162f', '2025-03-03T14:03:22.256Z', '36b0c4ea-6bcd-4566-85a5-77c8dc001b52', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "contentaccess" ("id", "accessDate", "contentId", "userId") VALUES ('80e1f439-e3b9-4c38-8ec7-0ce5795abda6', '2024-09-25T19:10:53.668Z', '260ecbeb-29cd-411e-9bc2-0ac7d346be84', 'b8b52fdf-1d6c-4b4e-8faa-0578870a78bf');
INSERT INTO "contentaccess" ("id", "accessDate", "contentId", "userId") VALUES ('a138dab7-f70d-400b-876b-ecf01e9461a8', '2024-08-31T09:35:13.813Z', '36b0c4ea-6bcd-4566-85a5-77c8dc001b52', 'cec1cd02-8d22-49ca-85ed-5923ff0b45e4');
INSERT INTO "contentaccess" ("id", "accessDate", "contentId", "userId") VALUES ('5c610261-939d-4d2f-80e6-24e4f1246ddf', '2024-09-25T11:21:38.847Z', '5554cea1-8e64-497c-92b0-e979fad47f23', 'cec1cd02-8d22-49ca-85ed-5923ff0b45e4');

INSERT INTO "investment" ("id", "investedAmount", "transactionId") VALUES ('c290d504-aa54-40d1-923f-2b99f8e4d73b', 774, 'b15b28a3-6d82-4198-9b9a-d70a434c4375');
INSERT INTO "investment" ("id", "investedAmount", "transactionId") VALUES ('14af4ffe-2a47-4c67-a6b2-3863d1bf2ad6', 74, 'b83e4a4c-7c45-4dfc-8b28-d456f4fd3d6c');
INSERT INTO "investment" ("id", "investedAmount", "transactionId") VALUES ('0b6b70ae-4c74-4ab3-922f-1c8e28c17e17', 465, '633e62ef-fc35-4c20-81b0-534496e61100');
INSERT INTO "investment" ("id", "investedAmount", "transactionId") VALUES ('b3a24b2f-743e-4d6a-ba3f-7bd598c39554', 171, '633e62ef-fc35-4c20-81b0-534496e61100');
INSERT INTO "investment" ("id", "investedAmount", "transactionId") VALUES ('a835d461-59bb-49f4-8e4e-dfb899cfd4f9', 822, 'b15b28a3-6d82-4198-9b9a-d70a434c4375');
INSERT INTO "investment" ("id", "investedAmount", "transactionId") VALUES ('e2f5bcb8-c577-456a-9ed5-78d36846f6cd', 915, '2c44f447-3904-449e-89a3-c24199d5d89f');
INSERT INTO "investment" ("id", "investedAmount", "transactionId") VALUES ('be7e351a-8b09-4b36-817d-07bbb4fd8858', 65, 'b15b28a3-6d82-4198-9b9a-d70a434c4375');
INSERT INTO "investment" ("id", "investedAmount", "transactionId") VALUES ('fcc1c1b0-a914-424c-abb6-8c3cd327d3d2', 587, 'aa14f010-26f8-4343-a0d3-206759837a08');
INSERT INTO "investment" ("id", "investedAmount", "transactionId") VALUES ('e74704cf-d3e2-41ff-8287-a371261de97f', 616, 'aa14f010-26f8-4343-a0d3-206759837a08');
INSERT INTO "investment" ("id", "investedAmount", "transactionId") VALUES ('a1acc7c0-0696-4384-912a-61190131d11d', 201, 'afb097d1-c007-4830-8607-2c206c51f3bc');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
