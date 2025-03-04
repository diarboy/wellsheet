<script setup>
import { ref, watch } from "vue";
import MarkdownIt from "markdown-it";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

if (pdfMake && pdfFonts) {
  pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;
}

const md = new MarkdownIt();
const markdownText = ref("# Selamat datang di Playground Allbibek!\n\nCoba tulis sesuatu di sini.");
const htmlOutput = ref(md.render(markdownText.value));

watch(markdownText, (newValue) => {
  htmlOutput.value = md.render(newValue);
});

const copyToClipboard = () => {
  navigator.clipboard.writeText(htmlOutput.value).then(() => {
    alert("HTML berhasil disalin!");
  });
};

const downloadPDF = () => {
  const docDefinition = {
    content: [
      {
        text: markdownText.value,
        style: 'header'
      }
    ]
  };
  pdfMake.createPdf(docDefinition).download("markdown.pdf");
};

const downloadDOCX = async () => {
  const lines = markdownText.value.split("\n").map(line => {
    if (line.startsWith("# ")) {
      return new Paragraph({
        children: [new TextRun({ text: line.replace("# ", ""), bold: true, size: 32 })],
      });
    } else if (line.startsWith("## ")) {
      return new Paragraph({
        children: [new TextRun({ text: line.replace("## ", ""), bold: true, size: 28 })],
      });
    } else if (line.startsWith("### ")) {
      return new Paragraph({
        children: [new TextRun({ text: line.replace("### ", ""), bold: true, size: 24 })],
      });
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      return new Paragraph({
        children: [new TextRun({ text: line.replace(/^- |^\* /, ""), bold: false })],
        bullet: { level: 0 },
      });
    } else {
      return new Paragraph({ children: [new TextRun(line)] });
    }
  });

  const doc = new Document({
    sections: [{ properties: {}, children: lines }],
  });

  try {
    const buffer = await Packer.toBlob(doc);
    saveAs(buffer, "markdown.docx");
  } catch (error) {
    console.error("Gagal membuat file DOCX:", error);
    alert("Gagal mengunduh DOCX.");
  }
};
</script>

<template>
  <div class="playground-container">
    <div class="editor">
      <h3>Markdown Editor</h3>
      <textarea v-model="markdownText" placeholder="Tulis Markdown di sini..."></textarea>
    </div>
    <div class="preview">
      <h3>Preview HTML</h3>
      <div v-html="htmlOutput" class="output"></div>
      <div class="button-container">
        <button @click="copyToClipboard">Copy HTML</button>
        <button @click="downloadPDF">Download PDF</button>
        <button @click="downloadDOCX">Download DOCX</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.playground-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.editor, .preview {
  width: 100%;
}

textarea {
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: monospace;
}

.output {
  border: 1px solid #ccc;
  min-height: 300px;
  padding: 10px;
  background: transparent;
  border-radius: 5px;
  overflow: auto;
  word-wrap: break-word;
  color: var(--vp-c-text-1);
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  background: #2E7D32;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

button:hover {
  background: green;
  transform: scale(1.05);
}

button:active {
  transform: scale(0.98);
}

@media (min-width: 768px) {
  .playground-container {
    flex-direction: row;
  }
  .editor, .preview {
    width: 50%;
  }
}
</style>
