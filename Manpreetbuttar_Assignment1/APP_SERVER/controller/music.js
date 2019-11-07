var musicArray = [{
        songname: 'filmy scene',
        singer: 'korala mann'
},
    {
        songname: 'little bit',
        singer: 'jass bajwa'
},
    {
        songname: 'photo',
        singer: 'singga'
                  }]

const musiclist = function (req, res) {
    res.render('list-display', {
        song: musicArray,
        title: 'musiclist'
    });
};


const about = function (req, res) {
    res.render('about', {

        title: 'about my site '
    });
};
    const display = function (req, res) {
    res.render('display', {

        title: 'NOT IMPLEMENTED '
    });
};
module.exports = {
    
    musiclist,about,display
};
