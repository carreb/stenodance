// Whenever a div with the class "map" is clicked, go to /play/<map's id>
// The map's id is the div's id.
$(document).ready(function() {
    $('.map').click(function() {
        window.location.href = `/play/${this.id}`
    }
    )
})