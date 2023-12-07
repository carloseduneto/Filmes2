package org.libertas.bd;

import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;


public class FilmesDAO {
	public void inserir(Filmes f) {
		Conexao con = new Conexao();
		try {
			String sql = "INSERT INTO filmes "
					+ "(titulo, duracao, classificacao, genero, lancamento)"
					+ "VALUES (?, ?, ?, ?, ?)";
			PreparedStatement prep = con.getConexao().prepareStatement(sql);
			prep.setString(1, f.getTitulo());
			prep.setString(2, f.getDuracao());
			prep.setString(3, f.getClassificacao());
			prep.setString(4, f.getGenero());
			prep.setString(5, f.getLancamento());
			prep.execute();
		} catch (Exception e) {
			e.printStackTrace();
		}
		con.desconectar();
	}
	public void alterar(Filmes f) {
		Conexao con = new Conexao();
		try {
			String sql = "UPDATE filmes"
					+ " SET titulo = ?, duracao = ?, classificacao = ?, genero = ?, lancamento = ? "
					+ " WHERE id = ? ";
			PreparedStatement prep = con.getConexao().prepareStatement(sql);
			prep.setString(1, f.getTitulo());
			prep.setString(2, f.getDuracao());
			prep.setString(3, f.getClassificacao());
			prep.setString(4, f.getGenero());
			prep.setString(5, f.getLancamento());
			prep.setInt(6, f.getId());
			
			prep.execute();
		} catch (Exception e) {
			e.printStackTrace();
		}
		con.desconectar();
		
	}
	public void excluir(Filmes f) {
		Conexao con = new Conexao();
		try {
			String sql = " DELETE FROM filmes "
					+ " WHERE id = ? ";
			PreparedStatement prep = con.getConexao().prepareStatement(sql);
			prep.setInt(1, f.getId());
			
			prep.execute();
		} catch (Exception e) {
			e.printStackTrace();
		}
		con.desconectar();
		
	}

	public Filmes consultar(int id) {

		Filmes f = new Filmes();
		Conexao con = new Conexao();
		try {
			String sql = "SELECT * FROM filmes WHERE id = " + id;
			Statement sta = con.getConexao().createStatement();
			ResultSet res = sta.executeQuery(sql);
			while (res.next()) {
				f.setId(res.getInt("id"));
				f.setTitulo(res.getString("titulo"));
				f.setDuracao(res.getString("duracao"));
				f.setClassificacao(res.getString("classificacao"));
				f.setGenero(res.getString("genero"));
				f.setLancamento(res.getString("lancamento"));
			
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		con.desconectar();
		return f;
	}
		
	public List<Filmes> listar(){
		List<Filmes> lista = new LinkedList<Filmes>();
			Conexao con = new Conexao();
		
		try {
			String sql = "SELECT * FROM filmes ORDER BY id";
			Statement sta = con.getConexao().createStatement();
			ResultSet res = sta.executeQuery(sql);
			while (res.next()) {
				Filmes f = new Filmes();
				f.setId(res.getInt("id"));
				f.setTitulo(res.getString("titulo"));
				f.setDuracao(res.getString("duracao"));
				f.setClassificacao(res.getString("classificacao"));
				f.setGenero(res.getString("genero"));
				f.setLancamento(res.getString("lancamento"));
				lista.add(f);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		con.desconectar();
		return lista;
	}
}

