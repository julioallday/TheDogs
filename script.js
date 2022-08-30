async function CarregarDogs()
{
    console.log("CarregarDogs");

    let dogsEncontrados = [];

    await axios.get(`https://api.thedogapi.com/v1/images/search?limit=8&size=full&sub_id=demo-989b87`).then((resp)=>{
        console.log(resp.data);
        dogsEncontrados = resp.data;
    }).catch((er)=>{
        console.log(er);
    });


    for(let i = 0; i < dogsEncontrados.length; i++)
    {
        document.getElementById("dogs").innerHTML += `<div class='col-md-12 col-lg-3 mt-4' style='position: relative;'>        <div class='w-100' style='position: relative; height: 280px; overflow: hidden;'>            <div class='seleteorDog rounded'></div>            <p class='nomeDog'>                The Dog 1                <br/>                <button type='button' class='mt-2 btn btn-success'>Adotar</button>            </p> <img class='w-100 rounded animCard' src='${dogsEncontrados[i].url}' />        </div>    </div>`;
    }
}

window.addEventListener("load", (event)=>{
    CarregarDogs();
});


