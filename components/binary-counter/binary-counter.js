fetch("/components/binary-counter/binary-counter.html")
.then(fetchResponse => fetchResponse.text())
.then(templateText => {

    const templateEl = new DOMParser().parseFromString(templateText, 'text/html').querySelector('template');
});
