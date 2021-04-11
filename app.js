$(function(){
  ajax();
});
  function ajax(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json',false);
    xhr.send(null);
    let facultades = JSON.parse(xhr.response);
    getMenu(facultades);
    
  }
  function getMenu(data){
    for(let i=0; i< data.length; i++){
      $("#lista").append(`
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="a${data[i].facultad}" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick="getData(${i})">
            ${data[i].facultad}
          </a>
          <div class="dropdown-menu" id="o${data[i].facultad}" aria-labelledby="a${data[i].facultad}">
          </div>
        </li>
      `);
      let esc = data[i].escuelas;
      for(let j=0; j< esc.length; j++){
        $(`#o${data[i].facultad}`).append(`
          <a class="dropdown-item" href="#">${esc[j]}</a>
        `);
      }
    }
  }
  function getData(u){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json',false);
    xhr.send(null);
    let data = JSON.parse(xhr.response);
    var d = data[u];
    console.log(d);
    $("#data").html('');
   $("#data").append(`
        <div class="card border-info" style="max-width: 740px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="img/${d.img}" alt="..." width="200" >
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title">${d.decano}</h3>
                <p class="card-text text-info">${d.info}</p>
              </div>
            </div>
          </div>
        </div>
    `);
  }

  








