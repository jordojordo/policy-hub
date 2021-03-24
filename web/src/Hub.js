import './Hub.css';
import * as React from 'react';
import PolicyItem from './entities/Policy';
import Select from 'react-select';

const DATA_URL = "https://raw.githubusercontent.com/chimera-kube/policy-hub/main/policy-hub.json";

class Hub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionCriteria: "",
      dataSet: null,
      keywordsOptionsSelected: [],
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch(DATA_URL);
    this.setState({ dataSet: await response.json()});
  }

  getDistinctSetOfKeywords() {
    if (!this.state.dataSet) {
      return [];
    }
    let arrayWithDuplicateKeywords = [];
    this.state.dataSet.forEach(p => arrayWithDuplicateKeywords = arrayWithDuplicateKeywords.concat(...p.keywords));
    return Array.from(new Set(arrayWithDuplicateKeywords));
  }

  onKeywordsFilterChange(e) {
    this.setState({ keywordsOptionsSelected: e });
  }

  onDescriptionFilterChange(e) {
    const criteria = e.target.value;
    this.setState({ descriptionCriteria: criteria });
  }

  filter() {
    let filteredDataSet = this.state.dataSet ? this.state.dataSet.filter(p =>
        p.description.toLowerCase().includes(this.state.descriptionCriteria.toLowerCase()))
      : [];

    filteredDataSet = this.state.keywordsOptionsSelected.length > 0 ? filteredDataSet.filter(p =>
        this.state.keywordsOptionsSelected.map(k => k.value).every(r => p.keywords.includes(r)))
      : filteredDataSet;

    return filteredDataSet;
  }

  render() {
    let keywordsOptions = [];
    this.getDistinctSetOfKeywords().forEach(k => {
      keywordsOptions = [...keywordsOptions, {value: k, label: k}];
    });

    return (
      <div className="Hub">
        <header className="Hub-header">
          <a href="/policy-hub" className="header-homepage" rel="noopener noreferrer">Policy Hub</a>
          <input
            className="filter-box"
            name="filter-description"
            key="filter-description"
            onChange={(e) => this.onDescriptionFilterChange(e)}
            placeholder="Filter by description"
          />
          <div className="keywords-select-container">
            <Select
              value={this.state.keywordsOptionsSelected}
              onChange={(e) => this.onKeywordsFilterChange(e)}
              options={keywordsOptions}
              isMulti={true}
              placeholder="Filter by keywords"
            />
          </div>
        </header>
        <section>
          {
            !this.state.dataSet ?
              <div className="loading">Loading..</div>
              : this.filter()
                  .map(e =>
                    <PolicyItem policy={e} key={e.name}
                      descriptionCriteria={this.state.descriptionCriteria}
                    />
                  )
          }
        </section>
      </div>
    );
  }
}

export default Hub;