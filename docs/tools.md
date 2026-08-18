# Core Software & Command-Line Utilities

A structured reference guide to the fundamental command-line utilities used across standard NGS and computational biology pipelines.

---

## Quality Control & Preprocessing

| Tool | Purpose | Example Command |
| :--- | :--- | :--- |
| **FastQC** | Evaluates raw sequencing read quality metrics (per-base scores, GC content, adapters). | `fastqc sample_R1.fastq.gz sample_R2.fastq.gz -o qc_out/` |
| **fastp** | All-in-one ultra-fast FASTQ preprocessor (QC, adapter trimming, polyG tail trimming). | `fastp -i in_1.fq.gz -I in_2.fq.gz -o out_1.fq.gz -O out_2.fq.gz -h report.html` |
| **MultiQC** | Aggregates summary statistics from multiple tools into a unified HTML dashboard. | `multiqc . -o multiqc_report/` |
| **Trimmomatic** | Flexible read trimming tool for Illumina NGS data. | `trimmomatic PE in_1.fq in_2.fq out_1_paired.fq out_1_unpaired.fq ILLUMINACLIP:TruSeq3-PE.fa:2:30:10` |

---

## Alignment & Mapping

### Short-Read Alignment
* **BWA-MEM2:** Ultra-fast short-read aligner optimized for sequence-to-reference matching with AVX-512 acceleration.
  ```bash
  bwa-mem2 mem -t 8 ref.fa read1.fastq.gz read2.fastq.gz | samtools sort -o aligned.bam
  ```
* **STAR (Spliced Transcripts Alignment to a Reference):** Ultrafast RNA-seq aligner capable of identifying novel splice junctions.
  ```bash
  STAR --runThreadN 16 --genomeDir /path/to/index --readFilesIn r1.fq.gz r2.fq.gz --readFilesCommand zcat --outSAMtype BAM SortedByCoordinate
  ```
* **Bowtie2:** Fast and memory-efficient alignment for short reads against large reference genomes.

### Long-Read & Comparative Mapping
* **minimap2:** Versatile sequence mapping for Oxford Nanopore and PacBio long reads, as well as whole-genome assemblies.
  ```bash
  minimap2 -ax map-ont ref.fa reads.fastq.gz | samtools sort -o ont_mapped.bam
  ```

---

## Genomic File Manipulation

### SAMtools / BCFtools / HTSlib
The standard suite for high-throughput sequencing data manipulation:

```bash
# Indexing a BAM file
samtools index aligned.sorted.bam

# Calculating alignment statistics
samtools flagstat aligned.sorted.bam

# Variant calling with BCFtools
bcftools mpileup -Ou -f ref.fasta aligned.sorted.bam | bcftools call -mv -Ob -o variants.bcf
```

### BEDtools
The "Swiss Army knife" for genomic arithmetic:

```bash
# Intersecting genomic intervals
bedtools intersect -a peaks.bed -b promoters.bed -wa -wb > intersected_peaks.bed

# Calculating coverage across windows
bedtools coverage -a genome_windows.bed -b alignments.bam > window_coverage.bed
```

---

## Single-Cell & Structural Biology

* **Seurat (R) & Scanpy (Python):** De facto frameworks for single-cell RNA sequencing analysis (normalization, dimensionality reduction, clustering, marker identification).
* **AlphaFold & ColabFold:** Deep learning-based 3D protein structure prediction directly from primary amino acid sequences.
* **PyMOL & ChimeraX:** High-performance molecular graphics and macromolecular structure visualization.
