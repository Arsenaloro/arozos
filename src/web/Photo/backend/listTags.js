/*
    List all the tags generated by neuralnet

    List all tags if tag paramter is not defined, otherwise show taged images
    Require
    vroot
*/

includes("imagedb.js");

function getVrootIDfromPath(rootID){
    if (rootID.indexOf(":") >= 0){
        rootID = rootID.split(":")[0];
    }

    return rootID;
}

function main(){
    var targetVroot = getVrootIDfromPath(vroot);
    var tagRecords = loadAllTagsRecord(targetVroot + ":/");
    var tagsMap = summarizeAndrestructureTags(tagRecords);
    sendJSONResp(tagsMap);
}

main();