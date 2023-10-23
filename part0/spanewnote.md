```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: response with status code 201
    browser stays on the same page without reloading
    
    Note right of browser: The browser executes the callback function that renders the notes 
```