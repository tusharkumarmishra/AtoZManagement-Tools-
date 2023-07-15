function starHandling(index){
    let elements = document.querySelectorAll(".fa-star")
    let element = Array.from(elements).filter((element) => element.classList.contains(index))[0];
    element.classList.toggle("blue");
  }
  
  function likeHandling(index) {
    currentFilteredJobs[index].like += 1;
    let elements = document.querySelectorAll(".likeBtn")
    const element = Array.from(elements).find((el) => el.classList.contains(index));
    const  abcd = `
    <i class="fa fa-thumbs-up" onClick="likeHandling(${index})" ></i>
           ${currentFilteredJobs[index].like}
      `
    element.innerHTML = abcd
    return;
  }
  
  function shareBtn(index) {
    let elements = document.querySelectorAll(".viewsLike")
    let element = Array.from(elements).filter((element) => element.classList.contains(index))[0];
    element.style.display = "none";
  
    elements = document.querySelectorAll(".shareContainer")
    element = Array.from(elements).filter((element) => element.classList.contains(index))[0];
    element.style.display = "flex";
    return;
  
  }
  
  function handleCloseBtn(index) {
    let elements = document.querySelectorAll(".viewsLike")
    let element = Array.from(elements).filter((element) => element.classList.contains(index))[0];
    element.style.display = "flex";
  
    elements = document.querySelectorAll(".shareContainer")
    element = Array.from(elements).filter((element) => element.classList.contains(index))[0];
    element.style.display = "none";
    return;
  
  }
  
  function onScreenLoad() {
    const data = Object.values(jobList);
    allJobs = data.flat();
    resetBtnHandle();
  }
  