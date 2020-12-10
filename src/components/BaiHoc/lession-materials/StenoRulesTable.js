import "./steno_rules_table.css";

function StenoRulesTable() {
    return (
        <section className="rules-section">
            <table className="rules-table">
                <caption>Bảng quy tắc</caption>
                <thead>
                    <tr>
                        <th>Âm Tiếng Việt</th>
                        <th>Phím tốc ký</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>s</td>
                        <td>s</td>
                    </tr>
                    <tr>
                        <td>t</td>
                        <td>t</td>
                    </tr>
                    <tr>
                        <td>k</td>
                        <td>k</td>
                    </tr>
                    <tr>
                        <td>c</td>
                        <td>k</td>
                    </tr>
                    <tr>
                        <td>h</td>
                        <td>h</td>
                    </tr>
                    <tr>
                        <td>r</td>
                        <td>r</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default StenoRulesTable;
