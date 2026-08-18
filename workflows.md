# Workflow Engines & Reproducibility

Modern bioinformatics pipelines require modularity, reproducibility, and native containerization across local machines, HPC clusters (Slurm, PBS), and cloud platforms (AWS, GCP, Azure).

---

## 1. Nextflow & nf-core

Nextflow uses a reactive, dataflow-driven paradigm in Groovy/Java, allowing concurrent and distributed pipeline execution.

### Minimal Process Example
```groovy
params.reads = "data/*_R{1,2}.fastq.gz"
params.outdir = "results"

process FASTQC {
    tag "$sample_id"
    publishDir "${params.outdir}/fastqc", mode: 'copy'
    container 'quay.io/biocontainers/fastqc:0.12.1--hdfd78af_0'

    input:
    tuple val(sample_id), path(reads)

    output:
    path "*_fastqc.{zip,html}", emit: qc_reports

    script:
    """
    fastqc -q ${reads}
    """
}

workflow {
    read_pairs_ch = Channel.fromFilePairs(params.reads)
    FASTQC(read_pairs_ch)
}
```

### nf-core Community Standard
[nf-core](https://nf-co.re/) is a curated collection of peer-reviewed, best-practice analysis pipelines built with Nextflow:
* `nf-core/rnaseq`: End-to-end RNA-seq processing, quantification, and QC.
* `nf-core/sarek`: Germline and somatic variant calling (WGS / WES).
* `nf-core/ampliseq`: 16S / ITS metagenomic amplicon sequencing analysis.

---

## 2. Snakemake

Snakemake is a Python-based execution engine centered around rule definitions and explicit file dependencies.

### Minimal Snakefile Example
```python
SAMPLES = ["sampleA", "sampleB"]

rule all:
    input:
        expand("qc/{sample}_fastqc.html", sample=SAMPLES)

rule fastqc:
    input:
        "data/{sample}.fastq.gz"
    output:
        html="qc/{sample}_fastqc.html",
        zip="qc/{sample}_fastqc.zip"
    threads: 2
    conda:
        "envs/fastqc.yaml"
    shell:
        "fastqc -t {threads} {input} --outdir qc/"
```

### Comparison Summary

| Feature | Nextflow | Snakemake |
| :--- | :--- | :--- |
| **Language Base** | Groovy (JVM) | Python |
| **Execution Paradigm** | Channel/Dataflow-driven | Rule-based Directed Acyclic Graph (DAG) |
| **Container Support** | Native (Docker, Singularity, Podman, Apptainer) | Native via Conda / Singularity / Docker |
| **Ecosystem** | nf-core | Snakemake Wrappers & Workflow Catalog |
