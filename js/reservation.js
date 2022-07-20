

window.addEventListener("load", () => {
    const search = new URL(document.location).searchParams;
    const fname = search.get("fname");
    const lname = search.get("lname");
    const email = search.get("email");
    const tel = search.get("tel");
    const country = search.get("country")
    const start = search.get("start");
    const departure = search.get("departure")
    const hotels = search.get("hotels");
    const rooms = search.get("rooms");
    const typeroom = search.get("typeroom");
    const description = search.get("description");

    const formtime = search.get("formTime");
  
    document.getElementById("tfname").innerHTML = fname;
    document.getElementById("tlname").innerHTML = lname;
    document.getElementById("temail").innerHTML = email;
    document.getElementById("ttel").innerHTML = tel;
    document.getElementById("tcountry").innerHTML = country;
    document.getElementById("tstart").innerHTML = start;
    document.getElementById("tdeparture").innerHTML = departure;
    document.getElementById("thotels").innerHTML = hotels;
    document.getElementById("trooms").innerHTML = rooms;
    document.getElementById("ttyperoom").innerHTML = typeroom;
    document.getElementById("tdescription").innerHTML = description;
    
  });
    
    
 