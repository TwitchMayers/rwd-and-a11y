new Vue({
    el: '#app',
    data: {
        newNote: '',
        notes: [],
        maxChars: 200
    },
    computed: {
        charsRemaining() {
            return this.maxChars - this.newNote.length;
        },
        isDisabled() {
            return this.newNote.trim() === '';
        },
        charsColor() {
            if (this.charsRemaining < 0) {
                return 'red';
            } else if (this.charsRemaining <= 10) {
                return 'yellow';
            } else {
                return 'black';
            }
        },
        notesTitle() {
            if (this.notes.length === 0) {
                return 'Нет записей';
            } else if (this.notes.length === 1) {
                return 'Запись';
            } else {
                return 'Записи';
            }
        },
        isMaxLength() {
            return this.newNote.length > 
        }
    },
    methods: {
        addNote() {
            if (this.newNote.trim() !== '' && this.charsRemaining >= 0) {
                const note = {
                    text: this.newNote,
                    time: new Date()
                };
                this.notes.push(note);
                this.newNote = '';
            }
        }
    }
});
