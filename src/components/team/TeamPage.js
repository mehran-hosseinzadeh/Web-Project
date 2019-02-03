import React, {Component} from 'react';
import {Button, Divider, Grid, Header, Image, Segment, Select, Tab, Table} from "semantic-ui-react";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import RelatedNews from "./RelatedNews";
import myConstants from "../../myConstants";

export default class TeamPage extends Component {
    state = {
        team_data: {},
        team_members: [],
        team_games: [],
        team_related_news: []
    };
    static defaultProps = {
        match: "",
        team_id: 1,
        leagueTable: [
            {name: "سپاهان", point: "42", gamePlayed: "14", rank: "1"},
            {name: "ابومسلم", point: "40", gamePlayed: "14", rank: "2"},
            {name: "پدیده", point: "39", gamePlayed: "14", rank: "3"},
            {name: "استقلال", point: "38", gamePlayed: "14", rank: "4"},
            {name: "پرسپولیس", point: "38", gamePlayed: "14", rank: "5"},
            {name: "فولاد", point: "37", gamePlayed: "14", rank: "6"},
            {name: "ذوب آهن", point: "36", gamePlayed: "14", rank: "7"},
            {name: "نفت آبادان", point: "33", gamePlayed: "14", rank: "8"},
        ],
        teamMember: [
            {name: "علی علوی", post: "مدافع", age: "23"},
            {name: "علی علوی", post: "مهاجم", age: "23"},
            {name: "علی علوی", post: "هافبک", age: "23"},
            {name: "علی علوی", post: "دروازه بان", age: "23"},
            {name: "علی علوی", post: "مربی", age: "23"},
            {name: "علی علوی", post: "سرمربی", age: "23"},
            {name: "علی علوی", post: "مدیر عامل", age: "23"},
            {name: "علی علوی", post: "بدنساز", age: "23"},
            {name: "علی علوی", post: "مدافع", age: "23"},
            {name: "علی علوی", post: "مدافع", age: "23"},
        ],
        filters: [
            {key: 'همه', text: 'همه', value: 'همه'},
            {key: 'دروازه بان', text: 'دروازه بان', value: 'دروازه بان'},
            {key: 'مدافع', text: 'مدافع', value: 'مدافع'},
            {key: 'مهاجم', text: 'مهاجم', value: 'مهاجم'},
            {key: 'هافبک', text: 'هافبک', value: 'هافبک'},
        ],
        matchFilters: [
            {key: 'برد', text: 'برد', value: 'برد'},
            {key: 'مساوی', text: 'مساوی', value: 'مساوی'},
            {key: 'باخت', text: 'باخت', value: 'باخت'},
            {key: 'تاریخ صعودی', text: 'تاریخ صعودی', value: 'تاریخ صعودی'},
            {key: 'تاریخ نزولی', text: 'تاریخ نزولی', value: 'تاریخ نزولی'},
            {key: 'امتیاز صعودی', text: 'امتیاز صعودی', value: 'امتیاز صعودی'},
            {key: 'امتیاز نزولی', text: 'امتیاز نزولی', value: 'امتیاز نزولی'},
        ],
        matches: [
            {rival: "سپاهان", result: " برد", scores: "3 - 1", date: "1397/11/22"},
            {rival: "پرسپولیس", result: " برد", scores: "2 - 1", date: "1397/11/22"},
            {rival: "صباباطری", result: " مساوی", scores: "3 - 3", date: "1397/11/22"},
            {rival: "فولاد", result: " باخت", scores: "1 - 2", date: "1397/11/22"},
            {rival: "سپیدرود", result: " برد", scores: "2 - 0", date: "1397/11/22"},
            {rival: "نفت تهران", result: " باخت", scores: "0 - 1", date: "1397/11/22"},
            {rival: "سپاهان", result: " مساوی", scores: "1 - 1", date: "1397/11/22"},
            {rival: "ذوب آهن", result: " برد", scores: "3 - 1", date: "1397/11/22"},
            {rival: "سپاهان", result: " برد", scores: "3 - 1", date: "1397/11/22"},
            {rival: "پرسپولیس", result: " برد", scores: "2 - 1", date: "1397/11/22"},
            {rival: "صباباطری", result: " مساوی", scores: "3 - 3", date: "1397/11/22"},
            {rival: "سپاهان", result: " مساوی", scores: "1 - 1", date: "1397/11/22"},
            {rival: "ذوب آهن", result: " برد", scores: "3 - 1", date: "1397/11/22"},
            {rival: "سپاهان", result: " برد", scores: "3 - 1", date: "1397/11/22"},
            {rival: "پرسپولیس", result: " برد", scores: "2 - 1", date: "1397/11/22"},
            {rival: "صباباطری", result: " مساوی", scores: "3 - 3", date: "1397/11/22"},
            {rival: "فولاد", result: " باخت", scores: "1 - 2", date: "1397/11/22"},
            {rival: "سپیدرود", result: " برد", scores: "2 - 0", date: "1397/11/22"},
            {rival: "نفت تهران", result: " باخت", scores: "0 - 1", date: "1397/11/22"},
            {rival: "سپاهان", result: " مساوی", scores: "1 - 1", date: "1397/11/22"},
            {rival: "ذوب آهن", result: " برد", scores: "3 - 1", date: "1397/11/22"},
        ]
    };

    async componentDidMount() {
        try {
            const ip = myConstants.get_ip();
            console.log(ip);
            const res = await fetch('http://' + ip + ':8000/toopchi/teams/all_data/' + this.props.match.params.id);
            const team_data = await res.json();
            console.log(team_data);
            const team_members = JSON.parse(team_data.team_members);
            console.log(team_members);
            const team_games = JSON.parse(team_data.team_games);
            console.log(team_games);
            this.setState({
                team_data,
                team_members,
                team_games,
            });
            let team_related_news = [];
            let res2 = await fetch('http://' + ip + ':8000/toopchi/team/related_news/title/' + this.props.match.params.id);
            let related_news = await res2.json();
            team_related_news[0] = {'type': 'عنوان خبر', 'all_news': JSON.parse(related_news)};
            res2 = await fetch('http://' + ip + ':8000/toopchi/team/related_news/body/' + this.props.match.params.id);
            related_news = await res2.json();
            team_related_news[1] = {'type': 'متن خبر', 'all_news': JSON.parse(related_news)};
            res2 = await fetch('http://' + ip + ':8000/toopchi/team/related_news/tags/' + this.props.match.params.id);
            related_news = await res2.json();
            team_related_news[2] = {'type': 'برچسب های اخبار', 'all_news': JSON.parse(related_news)};
            console.log(team_related_news);
            this.setState({
                team_related_news: team_related_news
            })
        } catch (e) {
            console.log(e);
        }
    }

    makeTabs() {
        return this.state.team_related_news.map((related_news, index) => {
            return {
                menuItem: related_news.type,
                render: () =>
                    <Tab.Pane attached={false}>
                        <RelatedNews allNews={related_news.all_news}/>
                    </Tab.Pane>
            }
        })
    }


    render() {
        return (
            <div className='main-team'>
                <Segment centered>
                    <Image
                        className="row"
                        centered
                        src={this.state.team_data.team_avatar}
                    />

                    <Header as='h1' Image centered className="center aligned">
                        <Image src={this.state.team_data.team_logo}/>
                        <br/>
                        {this.state.team_data.team_name}
                        <Header.Subheader>{this.state.team_data.team_nickname}</Header.Subheader>
                    </Header>
                    <Button positive centered className="center aligned">
                        دنبال کردن تیم
                    </Button>
                </Segment>
                <Segment>
                    <Grid columns={16} divided>
                        <Grid.Row stretched>
                            <Grid.Column width={3}>
                                {this.showLeagueTable()}
                                <Divider/>
                                {this.showTeamMemberTable()}
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <Segment style={{backgroundColor: "ghostWhite"}}>
                                    <span className='teamRelatedNews'>
                                        <Tab menu={{vertical: true}} menuPosition='right' panes={this.makeTabs()}/>
                                     </span>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Segment style={{backgroundColor: "ghostWhite"}}>
                                    {this.showMatches()}
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    };

    showMatches() {
        return (
            [
                <Header as='h2' className="center aligned" icon>
                    <Icon name="baseball ball"/>
                    لیست بازی ها
                </Header>,
                <Select placeholder='Filter By' options={this.props.matchFilters}/>,
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>حریف</Table.HeaderCell>
                            <Table.HeaderCell>نتیجه</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell> هفته </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.team_games.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.rival}</Table.Cell>
                                    <Table.Cell>{data.status}</Table.Cell>
                                    <Table.Cell>{data.result}</Table.Cell>
                                    <Table.Cell>{data.week}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            ]
        )
    }

    showLeagueTable() {
        return (
            [<Header as='h3' className="center aligned">
                <Image src="http://www.varzesh11.com/images/user/post/138283_991577854.jpg"/>
                <br/>
                لیگ برتر خلیج فارس
            </Header>,
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell/>
                            <Table.HeaderCell>نام</Table.HeaderCell>
                            <Table.HeaderCell>بازی</Table.HeaderCell>
                            <Table.HeaderCell>امتیاز</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.leagueTable.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.rank}</Table.Cell>
                                    <Table.Cell>{data.name}</Table.Cell>
                                    <Table.Cell>{data.point}</Table.Cell>
                                    <Table.Cell>{data.gamePlayed}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>]
        )
    }

    handleChange = (e, {value}) => {
        let filterTeamMember = this.state.team_members;
        this.setState({value});
        if (value === "همه") {
            filterTeamMember = this.props.teamMember
        } else {
            filterTeamMember = [];
            this.props.teamMember.forEach((data) => {
                if (data.post === value) {
                    filterTeamMember.push(data)
                }
            })
        }
    };

    showTeamMemberTable() {
        let filterTeamMember = this.state.team_members;
        return (
            [
                <Header as='h3' className="center aligned">
                    فهرست اعضای تیم
                </Header>,
                <Select
                    placeholder='Filter By'
                    options={this.props.filters}
                    onChange={this.handleChange}/>,
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>نام</Table.HeaderCell>
                            <Table.HeaderCell>سن</Table.HeaderCell>
                            <Table.HeaderCell> پست </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {filterTeamMember.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.name}</Table.Cell>
                                    <Table.Cell>{data.age}</Table.Cell>
                                    <Table.Cell>{data.post}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            ]
        )
    }
}

