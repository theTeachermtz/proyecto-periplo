Run the Cultural Cards image updater script.

Execute: `cd scripts && node update-images.js`

The script reads all active (non-deleted) CULTURAL_CARDS sets from Firebase for teacher_anita_001, finds images on Wikipedia using the WIKI_ALIASES dictionary, compresses them to 320px JPEG, and saves to Firestore.

If the script hasn't been run before or node_modules is missing, first run `cd scripts && npm install`.
