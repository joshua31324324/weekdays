

function dayChecker() {
    let day, link, image, title;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            link = "https://en.wikipedia.org/wiki/Sunday";
            image = "./images/Sunday.jpg";
            break;
        case 1:
            day = "Monday";
            link = "https://en.wikipedia.org/wiki/Monday";
            image = "./images/Monday.jpg";
            break;
        case 2:
            day = "Tuesday";
            link = "https://en.wikipedia.org/wiki/Tuesday";
            image = "./images/Tuesday.jpg";
            break;
        case 3:
            day = "Wednesday";
            link = "https://en.wikipedia.org/wiki/Wednesday";
            image = "./images/Wednesday.jpg";
            break;
        case 4:
            day = "Thursday";
            link = "https://en.wikipedia.org/wiki/Thursday";
            image = "./images/Thursday.jpg";
            break;
        case 5:
            day = "Friday";
            link = "https://en.wikipedia.org/wiki/Friday";
            image = "./images/Friday.jpg";
            break;
        case 6:
            day = "Saturday";
            link = "https://en.wikipedia.org/wiki/Saturday";
            image = "./images/Saturday.jpg";
            break;
        default:
            day = "not a weekday! Please try again later!";
            link = "https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week";
            break;
    }
    title = image ? `Today is ${day}` : "";
    return {
        day: day,
        link: link,
        image: image,
        title: title
    }
}

export default dayChecker;