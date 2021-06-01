const socket = io()


socket.on('activeRoomData', ({ rooms }) => {

    const roomSelect = document.querySelector('#active-room-list')

    // Clear list
    roomSelect.innerHTML = ""

    let titleOption = document.createElement('option')
    if (rooms.length === 0) {
        titleOption.value = "No Active Rooms"
        titleOption.text = "No Active Rooms"
    } else {
        titleOption.value = "Select From Active Rooms"
        titleOption.text = "Select From Active Rooms"
    }
    roomSelect.appendChild(titleOption)

    rooms.forEach((room) => {
        let option = document.createElement('option')
        option.value = room
        option.text = room
        roomSelect.appendChild(option)
    })
})


document.querySelector('#active-room-list').addEventListener('change', (e) => {
    const selection = e.target.value

    if (selection !== 'No Active Rooms' && selection !== 'Select From Active Rooms') {
        document.querySelector('#room-input').value = selection
    } else {
        document.querySelector('#room-input').value = ''
    }
})