// import agents from './../data/agents.csv';

const data = (function() {

  const AgentsArray = [];

  // const restructureAgentsArray = ([keys, ...values]) => 
  //   values.map(vs => Object.fromEntries(vs.map((v, i) => [keys[i], v])));
  // const result = restructureAgentsArray(agents);

  // console.log(agents);



  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
            <rss version="2.0"
              xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
              xmlns:content="http://purl.org/rss/1.0/modules/content/"
              xmlns:wfw="http://wellformedweb.org/CommentAPI/"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:wp="http://wordpress.org/export/1.2/"
            >
            <channel>
              <wp:wxr_version>1.2</wp:wxr_version>
              ${AgentsArray}
            </channel>
            </rss>
              `;
  const agentTemplage = `<item>
                      <title><![CDATA[Ian Batra]]></title>
                          
                      <content:encoded>
                        <![CDATA[
                          <!-- wp:acf/block-callout-block {
                            "name": "acf\/block-callout-block",
                            "data": {
                                "header": "Ian Batra",
                                "_header": "field_5e0f4a7e86613",
                                "sub": "Serving Almaden Valley, Cambrian Park, San Jose, Willow Glen, Los Gatos, Saratoga, Santa Cruz, Carmel & more",
                                "_sub": "field_5e0f4bdbad92a",
                                "text_align": "center",
                                "_text_align": "field_5e8f74b3303f0",
                                "overlay_style": "full",
                                "_overlay_style": "field_5fea3f62e4059",
                                "block_size": "default",
                                "_block_size": "field_5e0f4cc5ad931",
                                "block_type": "image",
                                "_block_type": "field_5e0f4be4ad92b",
                                "image": 18,
                                "_image": "field_5e0f4c25ad92c",
                                "has_modal": "1",
                                "_has_modal": "field_5e0f4cadad92f",
                                "button_text": "Contact Us",
                                "_button_text": "field_5ed12da12cc77",
                                "button_style": "stroke-white",
                                "_button_style": "field_5e187d707743f",
                                "form_fields_selected_form": "2",
                                "_form_fields_selected_form": "field_614124d48f2ef",
                                "form_fields_form_title": "0",
                                "_form_fields_form_title": "field_6148e524982f6",
                                "form_fields_form_subtitle": "0",
                                "_form_fields_form_subtitle": "field_6148e5c6982f8",
                                "form_fields_lead_routing_destination": "",
                                "_form_fields_lead_routing_destination": "field_6148e61c982fa",
                                "form_fields_confirmation_behaviour": "Default Confirmation Message",
                                "_form_fields_confirmation_behaviour": "field_6148e67b982fb",
                                "form_fields": "",
                                "_form_fields": "field_614910438f413"
                              },
                            "align": "",
                            "mode": "edit"
                          } /-->
                      
                          <!-- wp:acf/block-team-member-block {
                            "name": "acf\/block-team-member-block",
                            "data": [],
                            "align": "",
                            "mode": "edit"
                          } /-->
                      
                          <!-- wp:group {"backgroundColor":"neutral-200"} -->
                          <div class="wp-block-group has-neutral-200-background-color has-background"><!-- wp:acf/block-stat-block {
                            "name": "acf\/block-stat-block",
                            "data": {
                                "has_title": "1",
                                "_has_title": "field_5e18937f3e93a",
                                "section_title": "Highlights",
                                "_section_title": "field_5e1893923e93b",
                                "text_alignment": "center",
                                "_text_alignment": "field_5e1893ba3e93c",
                                "items_0_text": "Families Served",
                                "_items_0_text": "field_5dc55d916245e",
                                "items_0_number": "1000+",
                                "_items_0_number": "field_5dc55d966245f",
                                "items_1_text": "WSJ Ranking",
                                "_items_1_text": "field_5dc55d916245e",
                                "items_1_number": "Top 1%",
                                "_items_1_number": "field_5dc55d966245f",
                                "items_2_text": "5-Star Zillow Reviews",
                                "_items_2_text": "field_5dc55d916245e",
                                "items_2_number": "600+",
                                "_items_2_number": "field_5dc55d966245f",
                                "items": 3,
                                "_items": "field_5dc55d6c6245c"
                              },
                            "align": "",
                            "mode": "edit"
                          } /-->
                      
                          <!-- wp:paragraph -->
                          <p></p>
                          <!-- /wp:paragraph --></div>
                          <!-- /wp:group -->
                      
                          <!-- wp:acf/block-section-head {
                            "name": "acf\/block-section-head",
                            "data": {
                                "section_title": "My Listings",
                                "_section_title": "field_5dec10001f528",
                                "title_heading_size": "large",
                                "_title_heading_size": "field_610a4774d17b5",
                                "show_colored_line": "1",
                                "_show_colored_line": "field_5e6006f36dddf",
                                "section_subtitle": "",
                                "_section_subtitle": "field_5dec10081f529"
                              },
                            "align": "",
                            "mode": "edit"
                          } /-->
                      
                          <!-- wp:acf/block-home-junction-block {
                            "name": "acf\/block-home-junction-block",
                            "data": {
                                "shortcode": "[listings market=\"calrets\" agentId=\"5083482\" listingType=\"residential,multifamily\" sortfield=\"daysOnHJI\" sortorder=\"asc\" pageSize=\"8\" grid_size=\"4\" map=\"0\" pagination=\"0\"]",
                                "_shortcode": "field_5ebe3e373e5d6"
                              },
                            "align": "",
                            "mode": "edit"
                          } /-->
                      
                          <!-- wp:acf/block-section-head {
                            "name": "acf\/block-section-head",
                            "data": {
                                "section_title": "Past Sales",
                                "_section_title": "field_5dec10001f528",
                                "title_heading_size": "large",
                                "_title_heading_size": "field_610a4774d17b5",
                                "show_colored_line": "1",
                                "_show_colored_line": "field_5e6006f36dddf",
                                "section_subtitle": "",
                                "_section_subtitle": "field_5dec10081f529"
                              },
                            "align": "",
                            "mode": "edit"
                          } /-->
                      
                          <!-- wp:acf/block-home-junction-block {
                            "name": "acf\/block-home-junction-block",
                            "data": {
                                "shortcode": "<div data-pm-slice=\"1 1 []\" data-en-clipboard=\"true\">[past_sales market=\"calrets\" agentId=\"5083482\" sortfield=\"offMarketDate\" sortorder=\"desc\" status=\"Sold\" pageSize=\"8\" grid_size=\"3\" map=\"0\" pagination=\"1\"]<\/div>",
                                "_shortcode": "field_5ebe3e373e5d6"
                              },
                            "align": "",
                            "mode": "edit"
                          } /-->
                      
                          <!-- wp:group {"backgroundColor":"neutral-200"} -->
                          <div class="wp-block-group has-neutral-200-background-color has-background"><!-- wp:spacer {"height":1} -->
                          <div style="height:1px" aria-hidden="true" class="wp-block-spacer"></div>
                          <!-- /wp:spacer -->
                      
                          <!-- wp:acf/block-cards {
                            "name": "acf\/block-cards",
                            "data": {
                                "title": "Explore Our Neighborhoods",
                                "_title": "field_6030498934b30",
                                "card_0_image": 124,
                                "_card_0_image": "field_60304a3034b32",
                                "card_0_image_size": "fill",
                                "_card_0_image_size": "field_6035a3e032cc5",
                                "card_0_link_to": "\/community-details\/almaden-valley\/",
                                "_card_0_link_to": "field_60304a5834b33",
                                "card_0_title": "Almaden Valley",
                                "_card_0_title": "field_60304a7334b34",
                                "card_1_image": 126,
                                "_card_1_image": "field_60304a3034b32",
                                "card_1_image_size": "fill",
                                "_card_1_image_size": "field_6035a3e032cc5",
                                "card_1_link_to": "\/community-details\/cambrian-park\/",
                                "_card_1_link_to": "field_60304a5834b33",
                                "card_1_title": "Cambrian Park",
                                "_card_1_title": "field_60304a7334b34",
                                "card_2_image": 129,
                                "_card_2_image": "field_60304a3034b32",
                                "card_2_image_size": "fill",
                                "_card_2_image_size": "field_6035a3e032cc5",
                                "card_2_link_to": "\/community-details\/downtown-san-jose\/",
                                "_card_2_link_to": "field_60304a5834b33",
                                "card_2_title": "San Jose",
                                "_card_2_title": "field_60304a7334b34",
                                "card_3_image": 133,
                                "_card_3_image": "field_60304a3034b32",
                                "card_3_image_size": "fill",
                                "_card_3_image_size": "field_6035a3e032cc5",
                                "card_3_link_to": "\/community-details\/willow-glen\/",
                                "_card_3_link_to": "field_60304a5834b33",
                                "card_3_title": "Willow Glen",
                                "_card_3_title": "field_60304a7334b34",
                                "card_4_image": 128,
                                "_card_4_image": "field_60304a3034b32",
                                "card_4_image_size": "fill",
                                "_card_4_image_size": "field_6035a3e032cc5",
                                "card_4_link_to": "\/community-details\/los-gatos\/",
                                "_card_4_link_to": "field_60304a5834b33",
                                "card_4_title": "Los Gatos",
                                "_card_4_title": "field_60304a7334b34",
                                "card_5_image": 132,
                                "_card_5_image": "field_60304a3034b32",
                                "card_5_image_size": "fill",
                                "_card_5_image_size": "field_6035a3e032cc5",
                                "card_5_link_to": "\/community-details\/saratoga\/",
                                "_card_5_link_to": "field_60304a5834b33",
                                "card_5_title": "Saratoga",
                                "_card_5_title": "field_60304a7334b34",
                                "card_6_image": 468,
                                "_card_6_image": "field_60304a3034b32",
                                "card_6_image_size": "fill",
                                "_card_6_image_size": "field_6035a3e032cc5",
                                "card_6_link_to": "\/community-details\/santa-cruz\/",
                                "_card_6_link_to": "field_60304a5834b33",
                                "card_6_title": "Santa Cruz",
                                "_card_6_title": "field_60304a7334b34",
                                "card_7_image": 460,
                                "_card_7_image": "field_60304a3034b32",
                                "card_7_image_size": "fill",
                                "_card_7_image_size": "field_6035a3e032cc5",
                                "card_7_link_to": "\/community-details\/carmel\/",
                                "_card_7_link_to": "field_60304a5834b33",
                                "card_7_title": "Carmel",
                                "_card_7_title": "field_60304a7334b34",
                                "card": 8,
                                "_card": "field_603049a234b31"
                              },
                            "align": "",
                            "mode": "edit"
                          } /-->
                      
                          <!-- wp:spacer {"height":1} -->
                          <div style="height:1px" aria-hidden="true" class="wp-block-spacer"></div>
                          <!-- /wp:spacer -->
                      
                          <!-- wp:buttons {"contentJustification":"center"} -->
                          <div class="wp-block-buttons is-content-justification-center"><!-- wp:button -->
                          <div class="wp-block-button"><a class="wp-block-button__link" href="/communities">view all</a></div>
                          <!-- /wp:button --></div>
                          <!-- /wp:buttons -->
                      
                          <!-- wp:spacer {"height":50} -->
                          <div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
                          <!-- /wp:spacer --></div>
                          <!-- /wp:group -->
                      
                          <!-- wp:acf/block-callout-block {
                            "name": "acf\/block-callout-block",
                            "data": {
                                "header": "Discover Your Home's Value",
                                "_header": "field_5e0f4a7e86613",
                                "sub": "",
                                "_sub": "field_5e0f4bdbad92a",
                                "text_align": "center",
                                "_text_align": "field_5e8f74b3303f0",
                                "overlay_style": "full",
                                "_overlay_style": "field_5fea3f62e4059",
                                "block_size": "default",
                                "_block_size": "field_5e0f4cc5ad931",
                                "block_type": "image",
                                "_block_type": "field_5e0f4be4ad92b",
                                "image": 679,
                                "_image": "field_5e0f4c25ad92c",
                                "has_modal": "0",
                                "_has_modal": "field_5e0f4cadad92f",
                                "button": {
                                    "title": "Get Home Value",
                                    "url": "\/home-valuation",
                                    "target": ""
                                },
                                "_button": "field_5e0f4cbcad930",
                                "button_style": "stroke-white",
                                "_button_style": "field_5e187d707743f"
                              },
                            "align": "",
                            "mode": "edit"
                          } /-->
                      
                          <!-- wp:acf/block-featured-listings-cards {
                            "name": "acf\/block-featured-listings-cards",
                            "data": {
                                "section_title": "Featured Listings",
                                "_section_title": "field_5dec10001f528",
                                "title_heading_size": "large",
                                "_title_heading_size": "field_610a4774d17b5",
                                "show_colored_line": "0",
                                "_show_colored_line": "field_5e6006f36dddf",
                                "section_subtitle": "",
                                "_section_subtitle": "field_5dec10081f529",
                                "button": "",
                                "_button": "field_6090a0da24a8b"
                              },
                            "align": "",
                            "mode": "edit"
                          } /-->
                      
                          <!-- wp:acf/block-callout-block {
                            "name": "acf\/block-callout-block",
                            "data": {
                                "header": "Let's Talk",
                                "_header": "field_5e0f4a7e86613",
                                "sub": "You've got questions and we can't wait to answer them.",
                                "_sub": "field_5e0f4bdbad92a",
                                "block_size": "default",
                                "_block_size": "field_5e0f4cc5ad931",
                                "block_type": "image",
                                "_block_type": "field_5e0f4be4ad92b",
                                "image": 18,
                                "_image": "field_5e0f4c25ad92c",
                                "has_modal": "1",
                                "_has_modal": "field_5e0f4cadad92f",
                                "select_modal_form": "2",
                                "_select_modal_form": "field_5e18be809a1c7",
                                "button": "",
                                "_button": "field_5e0f4cbcad930",
                                "button_style": "stroke-white",
                                "_button_style": "field_5e187d707743f",
                                "form_fields_selected_form": "2",
                                "_form_fields_selected_form": "field_614124d48f2ef",
                                "form_fields_form_title": "0",
                                "_form_fields_form_title": "field_6148e524982f6",
                                "form_fields_form_subtitle": "0",
                                "_form_fields_form_subtitle": "field_6148e5c6982f8",
                                "form_fields_lead_routing_destination": "",
                                "_form_fields_lead_routing_destination": "field_6148e61c982fa",
                                "form_fields_confirmation_behaviour": "Default Confirmation Message",
                                "_form_fields_confirmation_behaviour": "field_6148e67b982fb",
                                "form_fields": "",
                                "_form_fields": "field_614910438f413"
                              },
                            "align": "",
                            "mode": "edit"
                          }
                        /-->]]>
                      </content:encoded>
                      
                      <wp:post_type><![CDATA[member-profile]]></wp:post_type>
                      </item>`;

  return {
    xml,
  }
})();

export {data};