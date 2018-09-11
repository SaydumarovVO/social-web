<template>
  <div>
    <v-text-field
      label="Выберите файл с данными"
      :rules="dataFileRules"
      @click='pickFile'
      v-model='fileName'
      prepend-icon='attach_file'
    />
    <input
      type="file"
      style="display: none"
      ref="text"
      accept="text/*"
      @change="onFilePicked"
    >
  </div>
</template>
<script>
  export default {
    data: () => ({
      fileName: '',
      fileUrl: '',
      fileItself: '',
      dataFileRules: [
        v => !!v || 'Выберите файл'
      ]
    }),

    methods: {
      pickFile () {
        this.$refs.text.click();
      },

      onFilePicked (e) {
        const files = e.target.files;
        if(files[0] !== undefined) {
          this.fileName = files[0].name;
          if(this.fileName.lastIndexOf('.') <= 0) {
            return;
          }
          const fr = new FileReader ();
          fr.readAsDataURL(files[0]);
          fr.addEventListener('load', () => {
            this.fileUrl = fr.result;
            this.fileItself = files[0];
            this.$emit("addFile", files[0]);
          })
        } else {
          this.fileName = '';
          this.fileItself = '';
          this.fileUrl = '';
        }
      }
    }

  }
</script>
