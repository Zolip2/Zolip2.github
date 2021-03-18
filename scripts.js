let szam = 1

$("#nyilaketto").on("click", () => {
    szam = szam + 1
    console.log(szam)
})




if (szam == 1) {
    document.getElementById('kepegy').src='images/bird-6062768_1920.jpg'
    console.log(szam)
}

$("#nyilaketto").on("click", () => {
    if (szam == 2) {
        document.getElementById('kepegy').src='images/elks-6037526_1920.jpg'
        $("#szoveg").html("Szarvas")
        $("#alszoveg").html("A szarvas a párosujjú patások közé tartozó emlősállat.")
    } else if (szam == 3) {
        document.getElementById('kepegy').src='images/flamingo-5971206_1920.jpg'
        $("#szoveg").html("Flamingó")
        $("#alszoveg").html("A rózsás flamingó (Phoenicopterus roseus) a madarak osztályának flamingóalakúak (Phoenicopteriformes) rendjébe és a flamingófélék (Phoenicopteridae) családjába tartozó faj.")
    } else if (szam == 4) {
        document.getElementById('kepegy').src='images/rhino-6065480_1920.jpg'
        $("#szoveg").html("Rinocérosz")
        $("#alszoveg").html("Az orrszarvúfélék vagy régies kifejezéssel rinocéroszok (Rhinocerotidae) öt ma élő nagy testű, afrikai vagy ázsiai páratlanujjú patás fajt tömörítő rendszertani család.")
    } else if (szam == 5) {
        document.getElementById('kepegy').src='images/tabby-5946499_1920.jpg'
        $("#szoveg").html("Macska")
        $("#alszoveg").html("A macska, más néven házi macska (Felis silvestris catus) kisebb termetű húsevő emlős, amely a ragadozók rendjén belül a macskafélék (Felidae) családjának Felis neméhez és Felis silvestris fajához tartozik.")
    } else if (szam == 6) {
        document.getElementById('kepegy').src='images/yachts-5971866_1920.jpg'
        $("#szoveg").html("Jacht")
        $("#alszoveg").html("A jacht szabadidős célokat szolgáló hajó.")
    } else if (szam == 7) {
        szam = 1
        document.getElementById('kepegy').src='images/bird-6062768_1920.jpg'
        $("#szoveg").html("Jégmadár")
        $("#alszoveg").html("A jégmadár (Alcedo atthis) a madarak osztályának szalakótaalakúak (Coraciiformes) rendjébe és a jégmadárfélék (Alcedinidae) családjába tartozó faj.")
    }
})

$("#nyilakegy").on("click", () => {
    szam = szam - 1
    console.log(szam)
})

$("#nyilakegy").on("click", () => {
    if (szam == 2) {
        document.getElementById('kepegy').src='images/elks-6037526_1920.jpg'
        $("#szoveg").html("Szarvas")
        $("#alszoveg").html("A szarvas a párosujjú patások közé tartozó emlősállat.")
    } else if (szam == 3) {
        document.getElementById('kepegy').src='images/flamingo-5971206_1920.jpg'
        $("#szoveg").html("Flamingó")
        $("#alszoveg").html("A rózsás flamingó (Phoenicopterus roseus) a madarak osztályának flamingóalakúak (Phoenicopteriformes) rendjébe és a flamingófélék (Phoenicopteridae) családjába tartozó faj.")
    } else if (szam == 4) {
        document.getElementById('kepegy').src='images/rhino-6065480_1920.jpg'
        $("#szoveg").html("Rinocérosz")
        $("#alszoveg").html("Az orrszarvúfélék vagy régies kifejezéssel rinocéroszok (Rhinocerotidae) öt ma élő nagy testű, afrikai vagy ázsiai páratlanujjú patás fajt tömörítő rendszertani család.")
    } else if (szam == 5) {
        document.getElementById('kepegy').src='images/tabby-5946499_1920.jpg'
        $("#szoveg").html("Macska")
        $("#alszoveg").html("A macska, más néven házi macska (Felis silvestris catus) kisebb termetű húsevő emlős, amely a ragadozók rendjén belül a macskafélék (Felidae) családjának Felis neméhez és Felis silvestris fajához tartozik.")
    } else if (szam == 6) {
        document.getElementById('kepegy').src='images/yachts-5971866_1920.jpg'
        $("#szoveg").html("Jacht")
        $("#alszoveg").html("A jacht szabadidős célokat szolgáló hajó.")
    } else if (szam == 7) {
        szam = 1
        document.getElementById('kepegy').src='images/bird-6062768_1920.jpg'
        $("#szoveg").html("Jégmadár")
        $("#alszoveg").html("A jégmadár (Alcedo atthis) a madarak osztályának szalakótaalakúak (Coraciiformes) rendjébe és a jégmadárfélék (Alcedinidae) családjába tartozó faj.")
    } else if (szam == 0) {
        szam = 6
        document.getElementById('kepegy').src='images/yachts-5971866_1920.jpg'
        $("#szoveg").html("Jacht")
        $("#alszoveg").html("A jacht szabadidős célokat szolgáló hajó.")
    } else if (szam == 1) {
        document.getElementById('kepegy').src='images/bird-6062768_1920.jpg'
        $("#szoveg").html("Jégmadár")
        $("#alszoveg").html("A jégmadár (Alcedo atthis) a madarak osztályának szalakótaalakúak (Coraciiformes) rendjébe és a jégmadárfélék (Alcedinidae) családjába tartozó faj.")
    }
})


$("#madar").on("click", () => {
    szam = 1
    console.log(szam)
    document.getElementById('kepegy').src='images/bird-6062768_1920.jpg'
    $("#szoveg").html("Jégmadár")
    $("#alszoveg").html("A jégmadár (Alcedo atthis) a madarak osztályának szalakótaalakúak (Coraciiformes) rendjébe és a jégmadárfélék (Alcedinidae) családjába tartozó faj.")
})

$("#szarvas").on("click", () => {
    szam = 2
    console.log(szam)
    document.getElementById('kepegy').src='images/elks-6037526_1920.jpg'
    $("#szoveg").html("Szarvas")
        $("#alszoveg").html("A szarvas a párosujjú patások közé tartozó emlősállat.")
})

$("#flamingo").on("click", () => {
    szam = 3
    console.log(szam)
    document.getElementById('kepegy').src='images/flamingo-5971206_1920.jpg'
    $("#szoveg").html("Flamingó")
    $("#alszoveg").html("A rózsás flamingó (Phoenicopterus roseus) a madarak osztályának flamingóalakúak (Phoenicopteriformes) rendjébe és a flamingófélék (Phoenicopteridae) családjába tartozó faj.")
})

$("#rinocerosz").on("click", () => {
    szam = 4
    console.log(szam)
    document.getElementById('kepegy').src='images/rhino-6065480_1920.jpg'
    $("#szoveg").html("Rinocérosz")
    $("#alszoveg").html("Az orrszarvúfélék vagy régies kifejezéssel rinocéroszok (Rhinocerotidae) öt ma élő nagy testű, afrikai vagy ázsiai páratlanujjú patás fajt tömörítő rendszertani család.")
})

$("#macska").on("click", () => {
    szam = 5
    console.log(szam)
    document.getElementById('kepegy').src='images/tabby-5946499_1920.jpg'
    $("#szoveg").html("Macska")
        $("#alszoveg").html("A macska, más néven házi macska (Felis silvestris catus) kisebb termetű húsevő emlős, amely a ragadozók rendjén belül a macskafélék (Felidae) családjának Felis neméhez és Felis silvestris fajához tartozik.")
})

$("#jacht").on("click", () => {
    szam = 6
    console.log(szam)
    document.getElementById('kepegy').src='images/yachts-5971866_1920.jpg'
    $("#szoveg").html("Jacht")
        $("#alszoveg").html("A jacht szabadidős célokat szolgáló hajó.")
})


