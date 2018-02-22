let monkeyPatcher = (() => {
    let processor = {
        upvote: obj => obj.upvotes += 1,
        downvote: obj => obj.downvotes += 1,
        score: obj => {
            let result = [];
            let reportUpVotes = obj.upvotes;
            let reportDownVotes = obj.downvotes;
            let totalVotes = obj.upvotes + obj.downvotes;
            let majority = Math.max(reportUpVotes, reportDownVotes);
            if (totalVotes > 50) {
                reportUpVotes += Math.ceil(majority * 0.25);
                reportDownVotes += Math.ceil(majority * 0.25);
            }
            let balance = reportUpVotes - reportDownVotes;
            let rating = getRating(obj.upvotes, obj.downvotes);
            result.push(reportUpVotes);
            result.push(reportDownVotes);
            result.push(balance);
            result.push(rating);
            return result;
        },
        call: (obj, args) => {
            return processor[args](obj);
        }
    };

    return processor;

    function getRating(upVotes, downVotes) {
        let votesTotal = upVotes + downVotes;
        let balance =  upVotes - downVotes;
        let upVotesPerc = upVotes / votesTotal * 100;

        if (votesTotal < 10) return 'new';
        if (upVotesPerc > 66) return 'hot';
        if (balance < 0) return 'unpopular';
        if (upVotes > 100 || downVotes > 100) return 'controversial';
        return 'new';
    }
})();

let forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

console.log(monkeyPatcher.call(forumPost, 'score'));
monkeyPatcher.call(forumPost, 'downvote');
console.log(monkeyPatcher.call(forumPost, 'score'));
monkeyPatcher.call(forumPost, 'upvote');
monkeyPatcher.call(forumPost, 'upvote');
console.log(monkeyPatcher.call(forumPost, 'score'));

