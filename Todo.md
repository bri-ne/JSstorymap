- [x] Clean up the SchoolCensus Data to only include the cols I need
  - [x] figuring out what columns to collapse and combine, e.g age
  - [x] change pop to a percentage
- [ ] figure out how to show school stats without having weird coloring
- [X] **could do buffer around camera and join to census blockgroups its in, take ave of race makeup and add pop up for each camera**
  - [ ] and then do choropleth for parks, school funding, trees?, libraries (distance to nearest), and grocery stores (distance to nearest), airbnbs? (number of them in each block group?)
- [ ] Identify example neighborhoods for each thing I'm mapping
  - [ ] rent
  - [ ] parks
  - [ ] libraries
  - [ ] demo


## Questions

- im confused why in your example all the data is loaded into a variable right off the bat? I thought we were trying to avoid that?
  - re: lifecopllections 
- I can't get my json to work. I checked that it was formatted okay in the geojson.io, but I can't even get it to print. there seems to be an error on the line where the first coordinates are and I think it's because ifit has coordinates then it's not a json, but I don't understand why it won't just print 