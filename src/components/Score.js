import React, { Component } from 'react';

class Score extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soalBelumDijawab: this.props.dataSoal.length,
            soalSudahDijawab: this.props.dataKoreksi.length,
            jawabanSalah: 0,
            jawabanBenar: 0,
            score: 0
        }
    }
    data = () => {
        let dataSoal = this.props.dataSoal;
        let dataJawaban = this.props.dataKoreksi;
        let belumDijawab = dataSoal.length - dataJawaban.length;
        let sudahDijawab = dataJawaban.length;
        let salah = dataJawaban.filter((value) => {
            return value.jawabKoreksi == "Salah"
        });
        let benar = dataJawaban.filter((value) => {
            return value.jawabKoreksi == "Benar"
        });;
        let totalScore = 100 / dataSoal.length * benar.length;

        console.log(dataJawaban);
        console.log(dataSoal);
        console.log(salah)
        this.setState({
            soalBelumDijawab: belumDijawab,
            soalSudahDijawab: sudahDijawab,
            jawabanSalah: salah.length,
            jawabanBenar: benar.length,
            score : totalScore.toFixed(1)
        })

    }
    render() {
        return (
            <div>
                <button className="btn btn-primary mb-3" onClick={this.data}>Prosess Quiz</button>
                <div>
                    <table className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Belum Dijawab</th>
                                <th scope="col">Sudah Dijawab</th>
                                <th scope="col">Jawaban Salah</th>
                                <th scope="col">Jawaban Benar</th>
                                <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.soalBelumDijawab}</td>
                                <td>{this.state.soalSudahDijawab}</td>
                                <td>{this.state.jawabanSalah}</td>
                                <td>{this.state.jawabanBenar}</td>
                                <td>{this.state.score}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default Score;