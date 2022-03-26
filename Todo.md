- [x] Clean up the SchoolCensus Data to only include the cols I need
  - [x] figuring out what columns to collapse and combine, e.g age
  - [x] change pop to a percentage
- [ ] figure out how to show school stats without having weird coloring
- [X] **could do buffer around camera and join to census blockgroups its in, take ave of race makeup and add pop up for each camera**
  - [ ] and then do choropleth for parks, school funding, trees?, libraries (distance to nearest), and grocery stores (distance to nearest), airbnbs? (number of them in each block group?)
    - [ ] maybe do a threshold over 50%, sum cameras in 50% non white and above. sum in 49% non white and below
    - [ ] something similar for rent 
      - [ ] this would be like: While the technology used in surveillance and the agencies emplying the tech have a racist track record and perpetuate racial discreminiation, intended or not, it's interesting to see that where cameras are located correlate with where white population in the city  clusters. This area is collowuially known as the white teapot (campanella), and is home to many tourist attractions, which may be motivation for the placement of the cameras. But nonetheless, the question of who is being protected and who they are being protected from is entertained by this demographic and rent affordability map. 
- [ ] Identify example neighborhoods for each thing I'm mapping
  - [ ] rent
  - [ ] parks
  - [ ] libraries
  - [ ] demo


## Questions

- [X] im confused why in your example all the data is loaded into a variable right off the bat? I thought we were trying to avoid that?
  - re: lifecopllections 
- [X] I can't get my first point to show up. From googling I think it might be that the function called to show the first slide data runs before the fetch statement is compelted, so there is no data to show. how do i tell if this is in fact the case and then how do i fix it? Are there other reasons why this would be happening. 
- [ ] i'm having a layer bounds issue, for data borught in differentl. I think it won't work on polygon layer b/c its looking for latlng? 
  - but it also won't work on the layer of just cameras point data. 
- [X] marker cluster
- [ ] legend