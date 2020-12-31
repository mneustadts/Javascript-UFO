# Using Javascript on UFO Data

## Summary

In this project I am tasked with using javascript to sort through a dataset that consists of a vast amount of UFO sightings taken over a period of time. My javascript code will communicate with a web page in order to take in a date that a user inputs and output the specific UFO sight data from that particular Date and Time.

## Web Page

I started by creating a simple web page with HTML and styled it with CSS. Adding any input fields that my javascript would eventually end up using to sort through the dataset.

![Web Page](./screen/ufo_page.png?raw=true "Web Page")

* navbar - Clickable text that included an icon that sends you back to default page.
* Title/Header - Shows an eye-catching background and summarizes the web page.
* Filter Search bar - Allows user to input a date from the week provided by the dataset.

## Javascript

Next, I started on my app.js file that would iterate over the array of objects in the data.js file. I wrote code that would append a table to the web page and add new rows for each UFO sighting for the given date that was input by the user. I used a date form in my HTML document and wrote javascript code that would listen for events and search through the specific 'date/time' column to find the rows that match the user input.

![App](./screen/js.png?raw=true "App")

Finally, What I ended up with was a beautiful web page that demonstrates how javascript, HTML, and CSS can come together and showcase data as well as streamline accessability of a dataset.
