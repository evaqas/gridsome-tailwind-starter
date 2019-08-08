<template>
    <div>
        <h1>HTML Elements</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam fugiat, unde reiciendis magnam maxime dignissimos vero explicabo quasi accusamus error consequatur necessitatibus cum in? Temporibus, id? Vel, ex nesciunt?</p>

        <h1>Heading 1 <a href="">with link</a></h1>
        <h2>Heading 2 <a href="">with link</a></h2>
        <h3>Heading 3 <a href="">with link</a></h3>
        <h4>Heading 4 <a href="">with link</a></h4>
        <h5>Heading 5 <a href="">with link</a></h5>
        <h6>Heading 6 <a href="">with link</a></h6>

        <p>Adipisci, similique? Veniam illo, laborum pariatur iusto odio quaerat maiores eveniet labore molestiae! Doloremque delectus id incidunt debitis, eaque labore impedit nesciunt vero voluptate molestiae ut minima repudiandae rerum cupiditate!</p>

        <h2>Lists</h2>

        <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3
        <ol>
        <li>Subitem 1</li>
        <li>Subitem 2</li>
        <li>Subitem 3
        <ul>
        <li>Subitem 1</li>
        <li>Subitem 2</li>
        <li>Subitem 3</li>
        </ul>
        </li>
        <li>Subitem 4</li>
        </ol>
        </li>
        <li>List item 4</li>
        </ul>

        <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3
        <ul>
        <li>Subitem 1</li>
        <li>Subitem 2</li>
        <li>Subitem 3
        <ol>
        <li>Subitem 1</li>
        <li>Subitem 2</li>
        <li>Subitem 3</li>
        </ol>
        </li>
        <li>Subitem 4</li>
        </ul>
        </li>
        <li>List item 4</li>
        </ol>

        <dl>
        <dt>Definition term 1</dt>
        <dt>Definition term 2</dt>
        <dd>Definition description</dd>
        <dd>Definition description</dd>
        <dt>Definition term 3</dt>
        <dd>Definition description</dd>
        </dl>

        <h2>Inline elements</h2>

        <ul>
        <li><a href="#0">Link</a></li>
        <li><a href="">Link with empty href</a></li>
        <li><abbr title="Abbreviation">ABBR</abbr></li>
        <li><b>Bold</b> element does not convey any special importance or relevance</li>
        <li><code>code element</code></li>
        <li><del>Del element</del></li>
        <li><em>Emphasis</em> e.g. "Just <em>do</em> it already!"</li>
        <li><i>Italic</i> e.g. "The <i>Queen Mary</i> sailed last night"</li>
        <li><ins>Inserted text</ins></li>
        <li><mark>Highlighted</mark></li>
        <li><s>Strikethrough</s></li>
        <li><small>Smaller text</small></li>
        <li><strong>Strong</strong> gives text strong importance</li>
        <li>Text<sup>suptext</sup></li>
        <li>Text<sub>subtext</sub></li>
        <li><u>Underlined</u> (other elements are almost always more appropriate than <code>&lt;u&gt;</code>)</li>
        </ul>

        <h2>Tables</h2>

        <table>
        <caption>Table caption</caption>
        <thead>
        <tr>
        <th>Header</th>
        <th>Header</th>
        <th>Header</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        </tr>
        <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        </tr>
        <tr>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
        <td>Footer</td>
        <td>Footer</td>
        <td>Footer</td>
        </tr>
        </tfoot>
        </table>

        <h2>Form elements</h2>

        <p><strong>Inline</strong></p>

        <p>
        <label for="checkbox"><input type="checkbox" id="checkbox" />Checkbox</label>
        <input type="submit" />
        <input type="button" value="type=button"/>
        <a class="btn" href="#0">.btn link</a>
        <a href="#0">Link</a>
        <button>Button</button>
        <button disabled>Disabled</button>
        <input type="text" />
        <select>
        <option>Option 1</option>
        <optgroup label="Group name">
        <option>Option 2</option>
        <option>Option 3</option>
        </optgroup>
        <option>Option 4</option>
        </select>
        <label for="radio1"><input type="radio" id="radio1" name="radio" />Radio 1</label>
        <label for="radio2"><input type="radio" id="radio2" name="radio" />Radio 2</label>
        </p>

        <hr>

        <p>
        <label for="disabled">Disabled</label>
        <input type="text" id="disabled" disabled>
        </p>

        <p>
        <label for="password">Password</label>
        <input type="password" id="password">
        </p>

        <p>
        <label for="textarea">Textarea</label>
        <textarea id="textarea"></textarea>
        </p>

        <fieldset>
        <legend>File</legend>
        <input type="file">
        </fieldset>

        <p>
        <label for="search">Search</label>
        <input type="search" id="search" disabled>
        </p>

        <p>
        <label for="email">Email</label>
        <input type="email" id="email">
        </p>

        <p>
        <label for="tel">Tel</label>
        <input type="tel" id="tel">
        </p>

        <p>
        <label for="number">Number</label>
        <input type="number" id="number">
        </p>

        <p>
        <label for="url">URL</label>
        <input type="url" id="url">
        </p>

        <p>
        <label for="date">Date</label>
        <input type="date" id="date">
        </p>

        <p>
        <label for="time">Time</label>
        <input type="time" id="time">
        </p>

        <p>
        <label for="range">Range</label>
        <input type="range" id="range">
        </p>

        <h2>Blockquote</h2>

        <blockquote>
        <p>At pariatur nobis, obcaecati tenetur saepe earum doloremque, sapiente quam voluptates facilis sit voluptatem commodi provident porro vero ratione sed, molestias laudantium reprehenderit quod laboriosam hic quas ipsam nostrum? Et!</p>
        <cite>&mdash; Quote author</cite>
        </blockquote>

        <h2>Address</h2>

        <address>
        Address element
        <br>Street name 1-2
        <br>Zip code
        <br>City
        <br>Country
        </address>

        <h2>Preformatted text</h2>

        <pre>
        body {
        color: red;
        }
        </pre>
    </div>
</template>

<script>
export default {
    name: 'KitchenSink'
}
</script>
