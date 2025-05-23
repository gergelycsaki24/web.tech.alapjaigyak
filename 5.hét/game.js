

const megoldas= Math.floor(Math.random()*1000001);

const maxtippek=20;

let tippekszama=0;

while(tippekszama<maxtippek){
    let tipp = prompt('Adj meg egy számot!(1 és 1000000 között)');

    tipp=parseInt(tipp);
    if(isNaN(tipp)){
        alert("Érvénytelen bemenet. Kérlek számot adj meg");
        continue;
    }

    tippekszama++;

    if(tipp===megoldas){
        alert(`Gratulálok ${tippekszama} lépésből eltaláltad`);
        break;
    }
    else if(tipp<megoldas){
        alert(`${tippekszama}. tipp nem sikerült. A megoldás nagyobb`);
    }
    else{
        alert(`${tippekszama}.tipp nem sikerült. A megoldás kissebb`);
    }
}

if (tippekszama==maxtippek){
    alert('Sajnos ez most nem sikerült')
}

