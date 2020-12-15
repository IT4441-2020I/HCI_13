import "./steno_rules_table.css";
import { Table } from "react-bootstrap";

function StenoRulesTable() {
    return (
        <section className="rules-section">
            <Table className="rules-table" bordered striped size="sm">
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
            </Table>
        </section>
    );
}

export default StenoRulesTable;
