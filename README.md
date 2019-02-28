# AdaptiveWeb
Social visualization with behavior logging




"	All the source Code for the project is present in SourceCode Folder in Assign1-RakshaaVaidyanathan.
"	ENTRY PAGE IS app.js in SourceCode Folder, please run node app.js for the project to work.
"	 I have attached the word document AW1, where I have included the screenshots of my project for your reference.
"	Please Also refer to the video AW1 and Database, which demonstrates the project.

This project is completely written in Node js and uses MongoDB for database. 
For the project to run on local machine, follow the below steps

1.	Node.js and MongoDb must have been installed locally on the machine. 
2.	Create a Folder named AW, cd to AW
Enter these commands
3.	npm init (I have given app.js as entry point)
4.	npm install express mongoose passport -save
5.	npm install passort-local passport-local-mongoose -save
6.	npm install body-parser -save

After you have all these installed,
Open terminal and run mongod, then just run node app.js on another terminal and visit localhost:3000 and it should work! 

For updating visualization after adding data in database, just run 
mongo newDatabase export.js > data1.csv
For the 5 csv files, which are data1.csv, data2.csv, data3.csv, data4.csv, data5.csv. Then the visualizations will get updated automatically. Sometimes there could be garbage value stored in the csv file which would prevent you from seeing the visualization, then we have to go to the csv file and delete the garbage value (usually first 3 lines), then it should work perfectly fine!!


