const fs = require('fs');

// Open the file in append mode
fs.open('nodejs_architecture.txt', 'a+', (err, fd) => {
    if (err) {
        console.log('Error in opening the file:', err);
        return;
    }

    // Append data to the file using the file descriptor (fd)
    const dataToAppend = '  Some Advantages: Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node.js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node.js is also flexible with multiple frameworks and makes the development process easier.';

    fs.write(fd, dataToAppend, (err, bytesWritten) => {
        if (err) {
            console.log('Error in appending file:', err);
            return;
        }
        console.log(`Successfully appended ${bytesWritten} bytes to the file.`);

        // Read the file content after appending
        fs.readFile('nodejs_architecture.txt', (err, data) => {
            if (err) {
                console.log('Error in reading the file:', err);
                return;
            }
            console.log('File content after appending:\n', data.toString());

            // Close the file after the operations
            fs.close(fd, (err) => {
                if (err) {
                    console.log('Error in closing the file:', err);
                } else {
                    console.log('Successfully closed the file.');
                }
            });
        });
    });
});
