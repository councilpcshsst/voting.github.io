import React, { useState } from 'react';
try {
    fetch('https://sheetdb.io/api/v1/y7wqhp9poak8a?sort_by=id')
    .then((response) => response.json())
    .then((data) => console.log(data));
} catch (e) { console.error(e); }

const { Token , setToken } = useState ;