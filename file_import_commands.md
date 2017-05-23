file commands for importing pair data.


1. Use this command to take the ParentBulkData containing node away.
perl -pi -e 's/{ \"PatentBulkData\" : //g' 1965.json

2. This command takes away the last "}" from the file.
perl -0777 -pi -e 's/(.*)}(.*?)/\1\2/s'

3. use this to import the file into mongodb.
mongoimport -d codealong -c patents_combo --file 1965.json --jsonArray

