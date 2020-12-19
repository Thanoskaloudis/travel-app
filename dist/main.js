var Client=function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"handleSubmit",(function(){return i})),n.d(t,"updateUI",(function(){return a}));const i=async e=>{e.preventDefault();let t=document.getElementById("city").value,n=document.getElementById("start").value,i=document.getElementById("end").value,a=new Date,o=new Date(n),d=new Date(i),r=o.getTime()-a.getTime(),c={startDate:n,endDate:i,differenceInDays:Math.round(r/864e5)};if(""===t)return void alert("Please enter a city");if(o<a||d<o)return void alert("Invalid date");console.log("::: Form Submitted :::");let s={},l={},m={};console.log("Fetching geographical data from geonames:",{city:t});const p=await fetch("http://localhost:8081/city",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({city:t})});try{const e=await p.json();s={city:e.geonames[0].name,country:e.geonames[0].countryName,lat:e.geonames[0].lat,lon:e.geonames[0].lng},console.log("Data received from geonames:",s)}catch(e){console.log("error",e)}console.log("Fetching weather data from weatherbit:",{cityLatLon:s});const u=await fetch("http://localhost:8081/weather",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});try{l=await u.json(),console.log("Data received from weatherbit:",l)}catch(e){console.log("error",e)}console.log("Fetching a pic from pixabay:",{cityLatLon:s});const v=await fetch("http://localhost:8081/pic",{method:"POST",credentials:"same-origin",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});try{m=await v.json(),console.log("Data received from pixabay:",m)}catch(e){console.log("error",e)}const f=document.querySelector("main"),g=document.createElement("section");g.setAttribute("id","trip"),g.innerHTML=Client.updateUI(c,m,s,l),f.appendChild(g)};function a(e,t,n,i){return`\n            <div id="dest_img">\n                <img src="${t.hits[0].webformatURL}" alt="">\n            </div>\n            <div id="dest_countdown">\n                in ${e.diffInDays} days\n            </div>\n            <div id="destination">\n                <p>Your Trip To:</p>\n                <h3>${n.city}, ${n.country}</h3>\n            </div>\n            <div id="dest_date">\n                <p>Dates:</p>\n                <h4>${e.startDate} To ${e.endDate}</h4>\n            </div>\n            <div id="forecast">\n                <p>3-Day Weather Forecast:</p>\n            </div>\n\n            <div id="dest_weather">\n                <div id="card">\n                    <div id="date">${i.data[0].datetime}</div>\n                    <div id="icon"><img src="../media/${i.data[0].weather.icon}.png" alt="${i.data[0].weather.description}"></div>\n                    <div id="temp">H:${i.data[0].max_temp}° | L:${i.data[0].min_temp}°</div>\n                    <div id="pop">${i.data[0].pop}%</div>\n                </div>\n                <div id="card">\n                    <div id="date">${i.data[1].datetime}</div>\n                    <div id="icon"><img src="../media/${i.data[1].weather.icon}.png" alt="${i.data[1].weather.description}"></div>\n                    <div id="temp">H:${i.data[1].max_temp}° | L:${i.data[1].min_temp}°</div>\n                    <div id="pop">${i.data[1].pop}%</div>\n                </div>\n                <div id="card">\n                    <div id="date">${i.data[2].datetime}</div>\n                    <div id="icon"><img src="../media/${i.data[2].weather.icon}.png" alt="${i.data[2].weather.description}"></div>\n                    <div id="temp">H:${i.data[2].max_temp}° | L:${i.data[2].min_temp}°</div>\n                    <div id="pop">${i.data[2].pop}%</div>\n                </div>\n            </div>\n            `}n(0),n(1),n(2),n(3);document.getElementById("submit").addEventListener("click",i)}]);