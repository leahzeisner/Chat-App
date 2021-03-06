const users = []



const addUser = ({ id, username, room }) => {
    if (!username || !room) {
        return {
            error: 'Error! Username and room are required.'
        }
    }

    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if (existingUser) {
        return {
            error: 'Error! Username is already in use.'
        }
    }

    const user = { id, username, room }
    users.push(user)
    return { user }
}



const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    
    if (index !== -1) {
        const user = users[index]
        return users.splice(index, 1)[0]
    }
}



const getUser = (id) => users.find((user) => user.id === id)



const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}


const getActiveRooms = () => {
    const rooms = []
    users.forEach((user) => {
        if (!rooms.includes(user.room)) {
            rooms.push(user.room)
        }
    })
    return rooms
}


module.exports = { addUser, removeUser, getUser, getUsersInRoom, getActiveRooms }