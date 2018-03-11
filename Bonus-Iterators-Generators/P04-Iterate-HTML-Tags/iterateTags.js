function* extractTags(html) {
    let regex = /<[^>]+>/g;
    let match = regex.exec(html);
    while (match)  {
        let tag = match[0];
        match = regex.exec(html);
        yield tag;
    }
}