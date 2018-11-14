// Morning Challenge
// 1. Implement topWatchlistedMoviesAmongFriends method that will return an array of top four movie titles, that have been most watchlisted by friends of a given user.
// 2. If there are no such movies, then an empty list should be returned or as many movies as possible.
// 3. Movies that have equal watchlist count, should be ordered alphabetically.
let movies = [{
    "title": "The Shawshank Redemption",
    "duration": "PT142M",
    "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
    "ratings": [],
    "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
  },
  {
    "title": "The Godfather",
    "duration": "PT175M",
    "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
    "ratings": [],
    "watchlist": [62289, 66380, 34139, 6146]
  },
  {
    "title": "The Dark Knight",
    "duration": "PT152M",
    "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
    "ratings": [],
    "watchlist": [51417, 62289, 6146, 71389, 7001]
  },
  {
    "title": "Pulp Fiction",
    "duration": "PT154M",
    "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
    "ratings": [],
    "watchlist": [7001, 9250, 34139, 6146]
  },
  {
    "title": "Schindler's List",
    "duration": "PT195M",
    "actors": [
      "Liam Neeson",
      "Ralph Fiennes",
      "Ben Kingsley"
    ],
    "watchlist": [15291, 51417, 7001, 9250, 93707]
  }];
let users = [{
        "userId": 15291,
        "email": "Constantin_Kuhlman15@yahoo.com",
        "friends": [7001, 51417, 62289]
    },
    {
        "userId": 7001,
        "email": "Keven6@gmail.com",
        "friends": [15291, 51417, 62289, 66380]
    },
    {
        "userId": 51417,
        "email": "Margaretta82@gmail.com",
        "friends": [15291, 7001, 9250]
    },
    {
        "userId": 62289,
        "email": "Marquise.Borer@hotmail.com",
        "friends": [15291, 7001]
 }];
// Your implementation should return following output for userId=62289 for example data:
// ["Schindler's List", "Pulp Fiction", "The Dark Knight", "The Shawshank Redemption"]
// In the example above, user with id 62289 has two friends: user with id=15291and with id=7001. Schindler's List is watchlisted by both users, so it will be the most watchlisted.
function topWatchlistedMoviesAmongFriends(userId) {
  // let friends = [...(users.find(user => user.userId === userId ).friends)];
  let friends = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === userId) {
      friends = [...users[i].friends]
    }
  }
  if (friends) {
    let friendWatchList = {};
    for (let i = 0; i < movies.length; i++) {
      for (let j = 0; j < friends.length; j++) {
        if (movies[i].watchlist.includes(friends[j])) {
          if (friendWatchList.hasOwnProperty(movies[i].title)) {
            friendWatchList[movies[i].title] += 1
          } else {
            friendWatchList[movies[i].title] = 1;
          }
        }
      }
    }
    console.log(friendWatchList);
    let sortedList = Object.keys(friendWatchList).sort().sort(function(a,b){return friendWatchList[b]-friendWatchList[a]})
    return sortedList.slice(0,4);
  } else {
    return "No friends"
  }
}


let watchlist = topWatchlistedMoviesAmongFriends(62289);
console.log(watchlist);
watchlist = topWatchlistedMoviesAmongFriends(15291);
console.log(watchlist);
watchlist = topWatchlistedMoviesAmongFriends(7001);
console.log(watchlist);
watchlist = topWatchlistedMoviesAmongFriends(51417);
console.log(watchlist);

  // let friends = null;
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].userId === userId) {
  //     friends = [userId, ...users[i].friends]
  //   }
  // }


  // movies.map( (movie) => {

  // });
  // for (let user in users)
  //   if (user.userId === userId) {
  //     friends = user.friends
  //   }
  // }
  // for (let movie in movies) {

  // }
