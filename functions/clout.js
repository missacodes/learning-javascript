const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];
function mean (meanviews) {
    let totalViews = 0;
    for (let i = 0; i < meanviews.length; i++) {
        totalViews += meanviews[i];
    }
    return totalViews/meanviews.length;
}
recentTikTokViews.sort(function(a, b) {
    return a-b;
})

recentInstagramViews.sort(function(a, b) {
    return a-b;
})

recentYouTubeViews.sort(function(a, b) {
    return a-b;
})
function median(medianviews){
    const middleIndex = Math.floor(medianviews.length/2);
    if ((medianviews.length %2) !== 0 ){
        return medianviews[middleIndex];
    }
    else {
        return ((medianviews[middleIndex - 1] + medianviews[middleIndex])/2);
    }

}
const TikTokMean = mean(recentTikTokViews);
const InstagramMean = mean(recentInstagramViews);
const YouTubeMean = mean(recentYouTubeViews);
const TikTokMedian = median(recentTikTokViews);
const InstagramMedian = median(recentInstagramViews);
const YouTubeMedian = median(recentYouTubeViews);
    console.log ( "TikTok\nMedian: ",TikTokMedian);
    console.log ( "Mean: ",TikTokMean);
    console.log( "Instagram\nMedian: ",InstagramMedian);
    console.log( "Mean: ",InstagramMean);
    console.log( "YouTube\nMedian: ",YouTubeMedian);
    console.log( "Mean: ",YouTubeMean);