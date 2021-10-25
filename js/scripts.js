$(document).ready(function() {
  $("#favoritethings").submit(function(event) {
  event.preventDefault();

  
  const foodInput = $("input#food").val();
  const colorInput = $("input#color").val();
  const animalInput = $("input#animal").val();
  const hobbyInput = $("input#hobby").val();
  const movieInput = $("input#movie").val();

  // $(".food").text(foodInput);
  // $(".color").text(colorInput);
  // $(".animal").text(animalInput);
  // $(".hobby").text(hobbyInput);
  // $(".movie").text(movieInput);  


  const favoriteThings = [foodInput, colorInput, animalInput, hobbyInput, movieInput];
  // const test = favoriteThings.pop();
  // const favoriteThings2 = favoriteThings.pop();

  $(".showarray").append(favoriteThings);
  $(".showarray").text(favoriteThings[3]);
  
  });
});