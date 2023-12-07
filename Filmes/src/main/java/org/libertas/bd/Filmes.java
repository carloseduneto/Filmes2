package org.libertas.bd;

public class Filmes {
	private int id;
	private String titulo;
	private String duracao;
	private String classificacao;
	private String genero;
	private String lancamento;
	
	public int getId() {
		return id;
	}

	public void setId(
			int id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(
			String titulo) {
		this.titulo = titulo;
	}

	public String getDuracao() {
		return duracao;
	}

	public void setDuracao(
			String duracao) {
		this.duracao = duracao;
	}

	public String getClassificacao() {
		return classificacao;
	}

	public void setClassificacao(
			String classificacao) {
		this.classificacao = classificacao;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getLancamento() {
		return lancamento;
	}

	public void setLancamento(
			String lancamento) {
		this.lancamento = lancamento;
	}

	public Filmes() {
		// TODO Auto-generated constructor stub
	}

}
