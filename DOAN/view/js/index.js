const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const keyword = urlParams.size==0?'': urlParams.get('keyword').trim().toLowerCase();
console.log(keyword);
// de lay data 
 fetch("http://localhost/DOAN/thucung.php")
 .then(function (response) {
  return response.json();
})
.then(function (body) {

  let stringItem = ``;
  for (let i = 0; i < body.length; i++) {
    if ( body[i].name.toLowerCase().search(keyword)!= -1)
      stringItem = stringItem + `<div class="col-12 col-sm-6 col-lg-3">
      <div class="card" style="width: 18rem;">
          <img src="${body[i].avatar}" class="card-img-top" alt="..."  style = "max-width: 400px;height: auto;">
          <div class="card-body">
              <h5 class="card-title">${body[i].name}</h5>
              <p class="card-text">${body[i].thongtin}</p>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item" style = "color: red;">GIÁ: ${VND.format(body[i].price)}</li>
              <li class="list-group-item" style = "color: red;">MÃ: ${body[i].code}</li>
          </ul>
          <div class="card-body">
          <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">Đặt hàng</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              Bạn có chắc chắn ?
              
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Đặt hàng</button>
              </div>
            </div>
          </div>
        </div>    
        <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Đặt hàng</a>
          </div>
      </div>
  </div>`;
  }
  document.getElementsByClassName("item")[0].innerHTML= stringItem;








  
});



       